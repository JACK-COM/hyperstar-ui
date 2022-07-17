import shared from "./theme.shared";

const DARK_THEME = {
  colors: {
    accent: "#f3db58",
    bgColor: "#020206",
    bgGradient:
      "radial-gradient(circle, #072249, #091c3c, #09162f, #000e1a, #020206);",
    semitransparent: "#0e0a18ef",
    error: "#d8500b",
    primary: "#f7f7f7",
    secondary: "#4db7d2",
    warning: "#867e00",
  },

  ...shared,
};

export default DARK_THEME;
