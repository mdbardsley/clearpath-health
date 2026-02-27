/**
 * Utility for biomorphic/organic styling classes.
 * Single theme (biomorphic minimalism) - no toggle.
 */
export function useThemeClasses() {
  return {
    isV2: true,
    isV1: false,
    button: "pebble-button",
    buttonRounded: "pebble-button",
    card: "organic-card organic-shadow",
    cardShadow: "organic-shadow-lg",
    container: "organic-container",
    shape: "organic-shape",
    shapeAlt: "organic-shape-alt",
    combine: (baseClasses: string, v2Classes: string = "", _v1Classes: string = "") =>
      [baseClasses, v2Classes].filter(Boolean).join(" ").trim(),
  };
}
