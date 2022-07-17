import styled from "styled-components";
import { APP_VERSION } from "utils";
import ImageLoader from "./Common/ImageLoader";
import { FlexColumn } from "./Common/Containers";
import { LogoProps } from "./Logo.Props";
import logo from "assets/hyperstar-full.svg"

const LG = 72;
const SM = 48;

const AppVersion = styled.span`
  display: block;
  font-size: x-small;
  width: 100%;
`;
const LogoImg = styled(ImageLoader)`
  height: auto !important;
  margin: 0 auto;
  overflow: hidden;
  pointer-events: none;
  max-width: 144px;
`;
const LogoWrapper = styled(FlexColumn)`
  cursor: pointer;
`;
const LogoComponent = ({ large = false, ...rest }: LogoProps) => (
  <LogoWrapper {...rest}>
    <LogoImg
      src={logo}
      className="logo infinite"
      alt="CREAM Project Logo"
      width={large ? LG : SM}
    />

    {!large && <AppVersion>{APP_VERSION}</AppVersion>}
  </LogoWrapper>
);

const Logo = styled(LogoComponent)``;

export default Logo;
