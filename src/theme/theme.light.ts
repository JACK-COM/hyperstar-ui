import shared from "./theme.shared";

const LIGHT_THEME = {
  colors: {
    accent: "#4e52b2",
    bgColor: "#aedeff",
    bgGradient:
      "linear-gradient(to bottom, #ffffff, #f3f5ff, #e1ecff, #cae4ff, #aedeff);;",
    semitransparent: "#f7f7f7bb",
    error: "#d8500b",
    primary: "#282c34",
    secondary: "#312faf",
    warning: "#867e00",
  },

  ...shared,
};

export default LIGHT_THEME;
