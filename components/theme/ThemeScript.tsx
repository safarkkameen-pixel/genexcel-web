import { THEME_STORAGE_KEY } from "@/lib/theme";

// This has to be a standalone string, not a call into lib/theme.ts's
// resolveInitialTheme() — it runs as a raw <script> before any React
// module code exists, so it can't import anything. Keep it in sync
// with that function's logic by hand if either one changes.
const THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

/**
 * Sets `data-theme` on <html> synchronously, before first paint — the
 * standard technique to avoid a flash of the wrong theme. Must render
 * as early as possible in <body> (see app/layout.tsx); a script placed
 * here blocks HTML parsing/painting until it finishes, same as a
 * script in <head> would, without fighting Next's own <head>
 * management.
 */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
