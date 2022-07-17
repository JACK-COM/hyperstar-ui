const ResetClr = `\x1b[0m`;
export const BgBlue = (s) => `\x1b[44m${s}${ResetClr}`;
export const BgGreen = (s) => `\x1b[42m${s}${ResetClr}`;
export const BgRed = (s) => `\x1b[41m${s}${ResetClr}`;
export const BgYellow = (s) => `\x1b[43m${s}${ResetClr}`;
export const Bright = (s) => `\x1b[1m${s}${ResetClr}`;
export const Dim = (s) => `\x1b[2m${s}${ResetClr}`;
export const FgBlue = (s) => `\x1b[34m${s}${ResetClr}`;
export const FgGreen = (s) => `\x1b[32m${s}${ResetClr}`;
export const FgRed = (s) => `\x1b[31m${s}${ResetClr}`;
export const FgYellow = (s) => `\x1b[33m${s}${ResetClr}`;
export const Underscore = (s) => `\x1b[4m${s}${ResetClr}`;

export const errorExit = (...msgs) => {
  // eslint-disable-next-line no-console
  console.log(Bright(FgRed("⛔️ Exit with Error:\n")), ...msgs);
  process.exit();
};
