'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import SoftAurora from '@/components/effects/SoftAurora/SoftAurora';

const TURNS = 3.2;
const HEIGHT = 6.4;
const RADIUS = 1.05;
const SEGMENTS = 220;
const RUNG_COUNT = 28;

function buildStrandCurve(phase: number) {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= SEGMENTS; i++) {
    const t = i / SEGMENTS;
    const angle = t * TURNS * Math.PI * 2 + phase;
    const y = t * HEIGHT - HEIGHT / 2;
    points.push(new THREE.Vector3(Math.cos(angle) * RADIUS, y, Math.sin(angle) * RADIUS));
  }
  return new THREE.CatmullRomCurve3(points);
}

function Strand({
  curve,
  tubeRadius,
  color,
  opacity = 1,
}: {
  curve: THREE.CatmullRomCurve3;
  tubeRadius: number;
  color: string;
  opacity?: number;
}) {
  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 220, tubeRadius, 8, false), [curve, tubeRadius]);
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.8}
        roughness={0.35}
        metalness={0.1}
        transparent
        opacity={opacity}
        depthWrite={opacity >= 1}
      />
    </mesh>
  );
}

function Rungs({
  curveA,
  curveB,
  color,
}: {
  curveA: THREE.CatmullRomCurve3;
  curveB: THREE.CatmullRomCurve3;
  color: string;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const dummies = useMemo(() => {
    const up = new THREE.Vector3(0, 1, 0);
    const arr: { position: THREE.Vector3; quaternion: THREE.Quaternion; length: number }[] = [];
    for (let i = 0; i < RUNG_COUNT; i++) {
      const t = i / (RUNG_COUNT - 1);
      const a = curveA.getPointAt(t);
      const b = curveB.getPointAt(t);
      const mid = a.clone().add(b).multiplyScalar(0.5);
      const dir = b.clone().sub(a);
      const length = dir.length();
      const quaternion = new THREE.Quaternion().setFromUnitVectors(up, dir.normalize());
      arr.push({ position: mid, quaternion, length });
    }
    return arr;
  }, [curveA, curveB]);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const matrix = new THREE.Matrix4();
    const scale = new THREE.Vector3();
    dummies.forEach((d, i) => {
      scale.set(1, d.length, 1);
      matrix.compose(d.position, d.quaternion, scale);
      mesh.setMatrixAt(i, matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, [dummies]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, RUNG_COUNT]}>
      <cylinderGeometry args={[0.035, 0.035, 1, 6]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} transparent opacity={0.85} />
    </instancedMesh>
  );
}

function HelixModel() {
  const groupRef = useRef<THREE.Group>(null);
  const curveA = useMemo(() => buildStrandCurve(0), []);
  const curveB = useMemo(() => buildStrandCurve(Math.PI), []);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0.05]}>
      {/* soft outer glow, drawn first so the solid strands read crisp on top */}
      <Strand curve={curveA} tubeRadius={0.12} color="#22D3EE" opacity={0.16} />
      <Strand curve={curveB} tubeRadius={0.12} color="#60A5FA" opacity={0.16} />
      <Strand curve={curveA} tubeRadius={0.05} color="#22D3EE" />
      <Strand curve={curveB} tubeRadius={0.05} color="#60A5FA" />
      <Rungs curveA={curveA} curveB={curveB} color="#10B981" />
    </group>
  );
}

export function DNAScene() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <SoftAurora
          speed={0.5}
          scale={1.8}
          brightness={0.85}
          color1="#0B1220"
          color2="#22D3EE"
          noiseFrequency={2.2}
          noiseAmplitude={0.9}
          bandHeight={0.5}
          bandSpread={0.9}
          octaveDecay={0.35}
          layerOffset={0.6}
          colorSpeed={0.6}
          enableMouseInteraction={false}
        />
      </div>
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 4, 4]} intensity={2.4} color="#22D3EE" />
        <pointLight position={[-4, -3, 3]} intensity={1.8} color="#60A5FA" />
        <HelixModel />
      </Canvas>
    </div>
  );
}

export default DNAScene;
