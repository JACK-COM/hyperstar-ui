import { useState } from "react";
import styled from "styled-components";
import {
  FlexColumn,
  FlexRow,
  GridContainer,
} from "components/Common/Containers";
import MIcon from "components/Common/MIcon";
import { TransparentButton } from "components/Forms/Button";
import ConnectWallet from "components/Reach/ConnectWallet";
import LogoLink from "components/LogoLink";
import ModalMenu from "./components/ModalMenu";
import SelectNetwork from "components/Reach/SelectNetwork";

const ButtonGrid = styled(GridContainer)`
  grid-template-columns: repeat(2, max-content);
  gap: 0.1rem;
  padding-right: 0.1rem;
`;
const HeaderContainer = styled(FlexRow)`
  color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  min-height: 10vmin;
  padding: ${({ theme }) => theme.sizes.sm};
  z-index: 999;

  .menu-button {
    display: none;
  }

  @media screen and (max-width: 767px) {
    .menu-button {
      display: inline-flex;
    }
  }
`;
const Spacer = styled(FlexColumn)`
  flex-grow: 2;
  font-size: ${({ theme }) => theme.sizes.sm};
  text-align: right;
  padding: 0 ${({ theme }) => theme.sizes.sm};
  opacity: 0.65;
`;

const AppHeader = () => {
  const [open, openMenu] = useState(false);
  const hideMenu = () => {
    openMenu(false);
    window.removeEventListener("click", hideMenu, true);
  };
  const showMenu = () => {
    window.addEventListener("click", hideMenu, true);
    openMenu(true);
  };

  return (
    <HeaderContainer>
      <LogoLink />

      <ModalMenu className={`slide-${open ? "in" : "out"}-right`} />

      {/* Navigation Menu */}
      <Spacer />

      <ButtonGrid>
        <SelectNetwork />

        <ConnectWallet />
      </ButtonGrid>

      <TransparentButton className="menu-button" onClick={showMenu}>
        <MIcon>menu</MIcon>
      </TransparentButton>
    </HeaderContainer>
  );
};

export default AppHeader;
