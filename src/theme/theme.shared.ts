const sizes = {
  xxs: "0.125rem",
  xs: "0.3rem",
  sm: "0.6rem",
  default: "1rem",
  md: "1.4rem",
  lg: "2.1rem",
  xlg: "2.6rem",
  xxlg: "3.2rem",
  xxxlg: "4.8rem",
};

const presets = {
  elevated: {
    md: (t: any) => ` 0 ${t.sizes.xxs} ${t.sizes.xs} ${t.colors.primary}44`,
  },
  rounded: {
    xlg: `100%`,
    lg: `32px`,
    md: `16px`,
    sm: `8px`,
  },
};

const shared = {
  sizes,
  presets,
};

export default shared;
