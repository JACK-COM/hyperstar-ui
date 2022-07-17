import {
  getBlockchain,
  getBlockchainNetwork,
  listSupportedNetworks,
  NetworkData,
  NetworkProvider,
  selectBlockchain,
  selectBlockchainNetwork,
} from "@jackcom/reachduck";
import ListView from "components/Common/ListView";
import Modal from "components/Common/Modal";
import {
  ToggleList,
  ToggleListItemHoverable,
} from "components/Common/ToggleList";
import Button from "components/Forms/Button";
import useGlobalUser from "hooks/globalUser";
import { disconnect } from "reach";
import { useMemo, useState } from "react";
import { addNotification } from "state";
import styled from "styled-components";
import CryptoIcon from "./CryptoIcon";

const ListItem = styled(ToggleListItemHoverable)`
  border-radius: 8px 0 0 8px;
  display: flex;
  place-content: center;
`;
const NetworkButton = styled(Button)`
  padding: 0.45rem;

  > * {
    padding: 0;
  }
`;
const NetworkList = styled(ListView)`
  > li,
  ${ListItem} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const SELECT_NETWORK = "Switch Blockchain";

const SelectNetwork = () => {
  const providers: NetworkProvider[] = ["TestNet", "MainNet"];
  const [selecting, setSelecting] = useState(false);
  const [showProviders, setShowProviders] = useState(false);
  const currentChain = getBlockchain();
  const currentNetwork = getBlockchainNetwork();
  const { address } = useGlobalUser();
  const supportedNetworks = useMemo(
    () => listSupportedNetworks().filter((net) => net.abbr !== currentChain),
    [currentChain, address]
  );
  const changeNetwork = (d: NetworkData) => {
    if (address) disconnect();
    addNotification(`Switching to ${d.name}`);
    selectBlockchain(d.abbr, true);
  };
  const changeProvider = (d: string | NetworkProvider) => {
    if (d === SELECT_NETWORK) {
      setShowProviders(false);
      setSelecting(true);
    } else selectBlockchainNetwork(d as NetworkProvider, true);
  };
  const maybeSelect = () => {
    if (currentChain === "ALGO") setShowProviders(!showProviders);
    else setSelecting(true);
  };

  return (
    <aside>
      <NetworkButton onClick={maybeSelect}>
        <CryptoIcon symbol={currentChain} />
      </NetworkButton>

      {showProviders && (
        <ToggleList
          data={[...providers, SELECT_NETWORK]}
          itemText={(d) => (
            <ListItem className={d === currentNetwork ? "selected" : undefined}>
              {d}
            </ListItem>
          )}
          onItemClick={changeProvider}
        />
      )}

      {selecting && (
        <Modal
          title="Switch Blockchain Network"
          onClose={() => setSelecting(false)}
        >
          <NetworkList
            data={supportedNetworks}
            itemText={(d: NetworkData) => <ListItem>{d.name}</ListItem>}
            onItemClick={changeNetwork}
          />
        </Modal>
      )}
    </aside>
  );
};

export default SelectNetwork;
