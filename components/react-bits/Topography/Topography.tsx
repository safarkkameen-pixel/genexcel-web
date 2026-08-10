"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Transform, Vec2 } from "ogl";
import "./Topography.css";

type TopographyProps = {
  lowColor?: string;
  midColor?: string;
  highColor?: string;
  colorMode?: "elevation" | "normals" | "slope";
  speed?: number;
  morphSpeed?: number;
  morphAmount?: number;
  bands?: number;
  scale?: number;
  thickness?: number;
  glow?: number;
  contrast?: number;
  brightness?: number;
  pixelSize?: number;
  opacity?: number;
  grain?: boolean;
  grainIntensity?: number;
  fillBands?: boolean;
  mouseInteraction?: boolean;
  mouseRadius?: number;
  mouseStrength?: number;
};

function hexToRgb(hex: string): number[] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r / 255, g / 255, b / 255];
}

function colorModeToFloat(mode: string): number {
  switch (mode) {
    case "elevation":
      return 0;
    case "normals":
      return 1;
    case "slope":
      return 2;
    default:
      return 0;
  }
}

/**
 * Animated WebGL topographical contour lines (ported from react-bits).
 * Renders into the container div with a transparent background so it can
 * sit behind hero copy. Kept as subtle noise: fine thin lines, slow drift,
 * low opacity, no grain — it is a backdrop, never a hero of its own.
 */
export function Topography({
  lowColor = "#16132e",
  midColor = "#7b5eff",
  highColor = "#9b89ff",
  colorMode = "elevation",
  speed = 0.5,
  morphSpeed = 0.04,
  morphAmount = 2,
  bands = 2,
  scale = 3,
  thickness = 0.012,
  glow = 0.2,
  contrast = 2,
  brightness = 0.65,
  pixelSize = 1,
  opacity = 1,
  grain = false,
  grainIntensity = 0.05,
  fillBands = false,
  mouseInteraction = true,
  mouseRadius = 0.2,
  mouseStrength = 0.2,
}: TopographyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const programRef = useRef<Program | null>(null);
  const mouseRef = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio || 1, 2) * pixelSize,
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const canvas = gl.canvas;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";

    const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `;

    const fragment = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_size;
      uniform float u_morph_speed;
      uniform float u_morph_amount;
      uniform float u_speed;
      uniform float u_bands;
      uniform float u_scale;
      uniform float u_thickness;
      uniform float u_glow;
      uniform float u_contrast;
      uniform float u_brightness;
      uniform float u_color_mode;
      uniform vec3 u_low_color;
      uniform vec3 u_mid_color;
      uniform vec3 u_high_color;
      uniform vec2 u_mouse;
      uniform float u_mouse_radius;
      uniform float u_mouse_strength;
      uniform float u_grain;
      uniform float u_grain_intensity;
      uniform float u_fill_bands;
      uniform float u_opacity;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = vUv;
        vec2 aspect = vec2(u_size.x / u_size.y, 1.0);
        vec2 p = uv * aspect;
        p = (p - 0.5 * aspect) * 2.0;

        float t = u_time * u_speed;
        float morph = sin(t * u_morph_speed) * u_morph_amount;
        float n1 = fbm(p * u_scale * 0.5 + t);
        float n2 = fbm(p * u_scale * 0.5 - t * 1.3 + 10.0);
        float n3 = fbm(p * u_scale * 0.5 + t * 0.8 + 20.0);
        float n = n1 * 0.6 + n2 * 0.3 + n3 * 0.1 + morph;
        n = n * 0.5 + 0.5;

        float band_pos = fract(n * u_bands);

        float edge1 = 1.0 - smoothstep(0.0, u_thickness, band_pos);
        float edge2 = 1.0 - smoothstep(1.0 - u_thickness, 1.0, band_pos);

        vec2 mouse = u_mouse * aspect;
        float dist = length(p - mouse);
        float mouse_influence = smoothstep(u_mouse_radius, 0.0, dist) * u_mouse_strength;
        float lines = max(edge1, edge2) * (1.0 + mouse_influence);

        float elevation = n;

        // Derivative functions (dFdx/dFdy) are not reliably available:
        // they need GL_OES_standard_derivatives in a WebGL1 context, or a
        // GLSL ES 3.00 shader in WebGL2 - and ogl injects neither
        // (Program.setShaders compiles the raw source). Approximate the
        // gradient with finite differences of the fbm field instead, so
        // the shader compiles on every WebGL1/WebGL2 context.
        vec2 sampleP = p * u_scale * 0.5;
        float nL = fbm(sampleP + vec2(0.006, 0.0) + t);
        float nD = fbm(sampleP + vec2(0.0, 0.006) + t);
        vec2 gradient = vec2(n - nL, n - nD);
        float slope = length(gradient);
        float slope_01 = smoothstep(0.0, 0.08, slope);

        float mode_factor;
        if (u_color_mode < 0.5) {
          mode_factor = elevation;
        } else if (u_color_mode < 1.5) {
          mode_factor = slope_01;
        } else {
          vec3 normal = normalize(vec3(gradient, 1.0));
          mode_factor = max(dot(normal, normalize(vec3(0.4, 0.4, 1.0))), 0.0);
        }

        vec3 low_color = u_low_color * (1.0 - mode_factor * u_contrast);
        vec3 color = mix(low_color, u_mid_color, smoothstep(0.25, 0.75, mode_factor));
        color = mix(color, u_high_color, smoothstep(0.75, 1.0, mode_factor));
        color *= u_brightness;

        vec3 glow_color = mix(u_low_color, u_high_color, mode_factor);
        color += glow_color * u_glow * lines;

        float grain_noise = hash(uv * 100.0 + u_time);
        color += (grain_noise - 0.5) * u_grain_intensity * u_grain;

        if (u_fill_bands > 0.5) {
          float fill = smoothstep(0.0, 0.3, band_pos) * smoothstep(1.0, 0.7, band_pos);
          color = mix(color, color * (1.0 + fill * 0.2), u_fill_bands);
        }

        float alpha = max(lines, u_glow * 0.5) * u_opacity;
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        u_time: { value: 0 },
        u_size: { value: new Vec2(container.clientWidth, container.clientHeight) },
        u_low_color: { value: hexToRgb(lowColor) },
        u_mid_color: { value: hexToRgb(midColor) },
        u_high_color: { value: hexToRgb(highColor) },
        u_color_mode: { value: colorModeToFloat(colorMode) },
        u_contrast: { value: contrast },
        u_brightness: { value: brightness },
        u_speed: { value: speed },
        u_morph_speed: { value: morphSpeed },
        u_morph_amount: { value: morphAmount },
        u_bands: { value: bands },
        u_scale: { value: scale },
        u_thickness: { value: thickness },
        u_mouse: { value: new Vec2(0, 0) },
        u_mouse_radius: { value: mouseRadius },
        u_mouse_strength: { value: mouseStrength },
        u_glow: { value: glow },
        u_grain: { value: grain ? 1 : 0 },
        u_grain_intensity: { value: grainIntensity },
        u_fill_bands: { value: fillBands ? 1 : 0 },
        u_opacity: { value: opacity },
      },
    });
    programRef.current = program;

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
    const scene = new Transform();
    mesh.setParent(scene);

    const onResize = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      if (clientWidth === 0 || clientHeight === 0) return;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.u_size.value = new Vec2(clientWidth, clientHeight);
    };
    onResize();

    window.addEventListener("resize", onResize);

    let animationId = 0;
    const startTime = performance.now();
    const loop = () => {
      animationId = requestAnimationFrame(loop);
      program.uniforms.u_time.value = (performance.now() - startTime) / 1000;
      program.uniforms.u_mouse.value = new Vec2(mouseRef.current[0], mouseRef.current[1]);
      renderer.render({ scene });
    };

    if (prefersReduced) {
      renderer.render({ scene });
    } else {
      loop();
    }

    // Pause the render loop while the hero is scrolled out of view, so the
    // effect costs nothing off-screen and never leaves duplicate frames
    // running after navigation. Reduced-motion visitors stay on the single
    // static frame regardless.
    const observer = new IntersectionObserver(
      (entries) => {
        if (prefersReduced) return;
        const isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible && !animationId) loop();
        if (!isVisible && animationId) {
          cancelAnimationFrame(animationId);
          animationId = 0;
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    container.appendChild(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      container.removeChild(canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
    // Props are applied once on setup; live prop changes are pushed
    // through the effect below so the WebGL context is never recreated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const program = programRef.current;
    if (!program) return;
    const u = program.uniforms;
    u.u_low_color.value = hexToRgb(lowColor);
    u.u_mid_color.value = hexToRgb(midColor);
    u.u_high_color.value = hexToRgb(highColor);
    u.u_color_mode.value = colorModeToFloat(colorMode);
    u.u_contrast.value = contrast;
    u.u_brightness.value = brightness;
    u.u_speed.value = speed;
    u.u_morph_speed.value = morphSpeed;
    u.u_morph_amount.value = morphAmount;
    u.u_bands.value = bands;
    u.u_scale.value = scale;
    u.u_thickness.value = thickness;
    u.u_mouse_radius.value = mouseRadius;
    u.u_mouse_strength.value = mouseStrength;
    u.u_glow.value = glow;
    u.u_grain.value = grain ? 1 : 0;
    u.u_grain_intensity.value = grainIntensity;
    u.u_fill_bands.value = fillBands ? 1 : 0;
    u.u_opacity.value = opacity;
  }, [
    lowColor,
    midColor,
    highColor,
    colorMode,
    contrast,
    brightness,
    speed,
    morphSpeed,
    morphAmount,
    bands,
    scale,
    thickness,
    mouseRadius,
    mouseStrength,
    glow,
    grain,
    grainIntensity,
    fillBands,
    opacity,
  ]);

  useEffect(() => {
    if (!mouseInteraction) return;
    const onMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current = [
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -(((event.clientY - rect.top) / rect.height) * 2 - 1),
      ];
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseInteraction]);

  return <div ref={containerRef} className="topography-container" aria-hidden="true" />;
}
