import { ComponentPropsWithRef } from "react";
import { DefaultTheme } from "styled-components";

type AllButtonProps = ComponentPropsWithRef<"button"> & {
  theme: DefaultTheme;
  round?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "accent" | "outlined" | "transparent";
};

export type IconButtonProps = AllButtonProps & { icon: string };

export default AllButtonProps;

export function bgColor({ theme, variant, disabled }: AllButtonProps) {
  switch (true) {
    case ["outlined", "transparent"].includes(variant as string):
    case disabled: {
      return "transparent";
    }
    case !variant:
    case variant === "accent": {
      return theme.colors.accent;
    }
    default:
      return "white";
  }
}

export function bgColorHover({ theme, variant, disabled }: AllButtonProps) {
  if (variant === "transparent") return theme.colors.semitransparent;
  return bgColor({ theme, variant, disabled });
}

export function border({ round, variant, disabled, theme }: AllButtonProps) {
  if (round || variant === "transparent") return 0;
  const style = disabled ? "dotted" : "solid";
  return `1px ${style} ${theme.colors.accent}`;
}

export function borderRadius({ round, theme }: AllButtonProps) {
  const { rounded } = theme.presets;
  return round ? rounded.lg : rounded.md;
}

export function textColor({ variant, disabled, theme }: AllButtonProps) {
  const { primary, semitransparent, accent } = theme.colors;
  if (disabled) return accent;
  return variant === "transparent" ? primary : semitransparent;
}

export function width({ size }: AllButtonProps) {
  return size === "lg" ? "100%" : "initial";
}
