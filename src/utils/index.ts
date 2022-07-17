import { version } from "../../package.json";

export const noOp = () => null;

export const APP_VERSION = version;
export const APP_VERSION_KEY = "appv";

export async function copyToClipboard(val: string) {
  return navigator.clipboard.writeText(val);
}

/** Format a numerical value as currency (by user locale) */
export function intlFormatCurrency(val: number) {
  const intlFmt = Intl.NumberFormat();
  return intlFmt.format(val);
}

export function isImageFile(path: string) {
  return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(path);
}

export function isVideoFile(path: string) {
  return /\.(mov|mp4|mpe?g|mkv|avi|webm|wmv)$/i.test(path);
}

/**
 * Strip `\0000` characters from byte string
 * @param {stringn} str String with empty `\0000` characters to remove
 * @returns
 */
export function trimByteString(str: string): string {
  return str && str.replace(/\0/g, "");
}

/**
 * Truncates Account string to `XXXX...XXXX`
 * @param {string} acct Account string
 * @returns {string}
 */
export function truncateAccountString(acct: string): string {
  const { length } = acct;
  const start = acct.substr(0, 6);
  return `${start}...${acct.substr(length - 6, length)}`;
}
