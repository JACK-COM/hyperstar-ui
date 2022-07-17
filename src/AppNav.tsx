import { NavLink } from "react-router-dom";
import ListView from "components/Common/ListView";
import routes from "routes/index";
import styled from "styled-components";

const menuItems = routes.filter((r) => r.menuItem);
const NavList = styled(ListView)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.semitransparent};
  border-radius: ${({ theme }) => theme.presets.rounded.sm};
  bottom: 0.3rem;
  display: grid;
  grid-template-columns: ${() => `repeat(${menuItems.length}, 1fr)`};
  left: 50%;
  margin: 0 auto 0 -300px;
  padding: ${({ theme }) => theme.sizes.xs};
  position: fixed;
  width: 600px;
  z-index: 999;

  > * {
    padding: 0;
  }

  @media screen and (max-width: 600px) {
    left: 2vmin;
    margin: 0;
    width: 96vmin;
  }
`;

export const NavItem = styled(NavLink).attrs({ exact: true })`
  border-radius: ${({ theme }) => theme.presets.rounded.sm};
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  line-height: ${({ theme }) => theme.sizes.xlg};
  text-align: center;
  transition: transform 250ms ease-out;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.semitransparent};
  }
`;

const AppNav = styled(() => (
  /* App routes */
  <NavList
    row
    className="menu-items slide-up-fade-in"
    data={menuItems}
    itemText={({ path, text }: any) => <NavItem to={path}>{text}</NavItem>}
  />
))``;

export default AppNav;
