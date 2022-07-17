import styled from "styled-components";
import Logo from "components/Logo";
import { NavItem } from "AppNav";
import routes from "routes";
import { ComponentPropsWithRef } from "react";

const menuItems = routes.filter(({ menuItem: show }) => show);

const ModalMenuItem = styled(NavItem)`
  text-align: left;
  padding-left: ${({ theme }) => theme.sizes.sm};
  min-width: 120px;

  &:first-of-type {
    margin-top: ${({ theme }) => theme.sizes.md};
  }
`;
const ModalMenuContainer = styled.menu`
  background-color: ${({ theme }) => theme.colors.bgColor};
  position: absolute;
  height: 100vh;
  right: 0;
  padding: ${({ theme }) => theme.sizes.lg};
  top: 0;
  z-index: 999;

  &.slide-out-right {
    animation: none;
    transition: 250ms ease-out;
    transform: translateX(10%);
    opacity: 0;
    pointer-events: none;
  }
`;
type ModalMenuProps = ComponentPropsWithRef<"menu">;
const ModalMenu = styled((props: ModalMenuProps) => (
  <ModalMenuContainer {...props}>
    <Logo />

    {menuItems.map(({ path, text }) => (
      <ModalMenuItem key={path} to={path}>
        {text}
      </ModalMenuItem>
    ))}
  </ModalMenuContainer>
))``;

export default ModalMenu;
