import { ComponentPropsWithRef } from "react";
import styled from "styled-components";

type MIconProps = {
  width?: string;
  outline?: boolean;
} & ComponentPropsWithRef<"span">;

const MIcon = styled.span.attrs((props: any) => ({
  className: props.outline ? "material-icons-outlined" : "material-icons"
}))<MIconProps>`
  height: ${({ width }) => width || "initial"};
  width: ${({ width }) => width || "initial"};
`;

export default MIcon;

const BCIconWrapper = styled(MIcon)`
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.semitransparent};
  border-radius: ${({ theme }) => theme.presets.rounded.xlg};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.sizes.md};
  padding: ${({ theme }) => theme.sizes.xs};
  z-index: 999;
`;

export const BondCurveIcon = styled(() => (
  <BCIconWrapper>auto_graph</BCIconWrapper>
))``;
