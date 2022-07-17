import { ThemeProps } from "styled-components";
import { LinkProps } from "react-router-dom";
import { ComponentPropsWithRef, RefAttributes } from "react";

export type LogoWrapperProps = LinkProps<unknown> &
  RefAttributes<HTMLAnchorElement> &
  ThemeProps<any> & { large?: "false" | "true" };
export type LogoProps = { large?: boolean } & ComponentPropsWithRef<"div">;
