import styled from "styled-components";
import { disconnect } from "reach/index";
import { noOp } from "utils";
import { CopyUserAddress } from "components/Common/CopyUserAddress";
import MIcon from "components/Common/MIcon";
import { ToggleListItemHoverable } from "components/Common/ToggleList";

const MenuItemRow = styled(ToggleListItemHoverable)`
  align-items: center;
  flex-direction: row;
`;

/** Menu items */
const menuData = [
  {
    text: "Copy Address",
    component: <CopyUserAddress />,
    icon: "launch",
    action: noOp,
  },

  {
    text: "Disconnect",
    component: (
      <MenuItemRow className="error--text">
        <MIcon>power_off</MIcon>
        <span>Disconnect</span>
      </MenuItemRow>
    ),
    icon: "launch",
    action: disconnect,
  },
];
export default menuData;
