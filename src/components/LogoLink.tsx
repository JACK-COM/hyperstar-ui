import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { LogoWrapperProps, LogoProps } from "./Logo.Props";

const LogoLinkWrapper = styled(Link)<LogoWrapperProps>`
  pointer-events: ${({ large }) => (large === "true" ? "none" : "all")};
  text-align: left;
  text-align: center;
`;

const LogoLink = ({ large = false }: LogoProps) => (
  <LogoLinkWrapper to="/" large={`${large}`}>
    <Logo large={large} />
  </LogoLinkWrapper>
);

export default LogoLink;
