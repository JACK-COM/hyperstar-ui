import styled from "styled-components";
import { MODAL } from "state";
import { truncateAccountString } from "utils";
import MIcon from "components/Common/MIcon";
import useGlobalUser from "hooks/globalUser";
import useGlobalModal from "hooks/globalModal";
import Button from "components/Forms/Button";
import { ToggleList } from "components/Common/ToggleList";
import menuData from "components/Reach/Menu.Items";

export const CWBtn = styled(Button)`
  margin: 0;
  padding: ${({ theme }) => theme.sizes.xs};
`;
const UserButton = styled(CWBtn)`
  @media screen and (max-width: 600px) {
    .address {
      display: none;
    }
  }
`;
const ConnectedUser = styled.aside`
  margin: ${({ theme }) => theme.sizes.xs};
`;

export function ConnectedButton() {
  const { address } = useGlobalUser();
  const { modal, hideModal, showModal } = useGlobalModal();
  const toggleSettings = () => {
    const next = modal === MODAL.IDLE ? MODAL.SETTINGS_MENU : MODAL.IDLE;
    showModal(next);
  };

  return (
    <ConnectedUser>
      <UserButton onClick={toggleSettings}>
        <MIcon>account_circle</MIcon>
        <span className="address">{truncateAccountString(address)}</span>
      </UserButton>

      {modal === MODAL.SETTINGS_MENU && (
        <ToggleList
          data={menuData}
          itemText={(d) => d.component || d.text}
          onItemClick={(d) => {
            d.action();
            hideModal();
          }}
        />
      )}
    </ConnectedUser>
  );
}

export function RetryConnection() {
  return (
    <CWBtn onClick={() => window.location.reload()}>
      <span className="material-icons">close</span>
      Retry Connection
    </CWBtn>
  );
}
