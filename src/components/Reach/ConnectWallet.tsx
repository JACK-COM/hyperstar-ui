import { checkSessionExists, getBlockchain } from "@jackcom/reachduck";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
// Views
import { TransparentButton } from "components/Forms/Button";
import { truncateAccountString } from "utils";
import store, { MODAL, updateAsError } from "state";
import {
  connect,
  loadReachDefaults,
  reconnect,
  useWalletConnect as WalletConnect,
  useWebWallet as MyAlgo
} from "reach/index";
import Modal from "components/Common/Modal";
import MIcon from "components/Common/MIcon";
import { GridContainer } from "components/Common/Containers";
import ImageLoader from "components/Common/ImageLoader";
// Assets
import myAlgoLogo from "assets/my-algo-blue.png";
import wcLogo from "assets/walletconnect-circle-black.png";
import useGlobalUser from "hooks/globalUser";
import useGlobalModal from "hooks/globalModal";
import {
  ConnectedButton,
  RetryConnection,
  CWBtn
} from "./ConnectWallet.Buttons";

const PROVIDERS: any = { WalletConnect, MyAlgo };
const SelectProviderGrid = styled(GridContainer)`
  grid-template-columns: repeat(2, 1fr);
`;

enum CWBUTTON {
  CONNECT = "Connect",
  CONNECTED = "1",
  RECONNECTING = "Reconnecting ... ",
  ERROR = "Retry",
  LOADING = "Connecting ... "
}

const wcButtonText = (isWCSession: boolean, addr: string) =>
  isWCSession
    ? `Resume WalletConnect Session (${truncateAccountString(addr || "")})`
    : "WalletConnect";

const ConnectWallet = () => {
  const { isWCSession, initialized, address, error } = useGlobalUser();
  const btnState = useMemo(() => {
    if (address) return CWBUTTON.CONNECTED;
    if (error) return CWBUTTON.ERROR;
    const { exists } = checkSessionExists();
    if (initialized && exists) return CWBUTTON.RECONNECTING;
    return CWBUTTON.CONNECT;
  }, [initialized, address, error]);
  const { modal, hideModal, showModal } = useGlobalModal();
  const [loading, setLoading] = useState(btnState === CWBUTTON.RECONNECTING);
  const resumeSession = async () => {
    if (address || loading) return;
    setLoading(true);
    await reconnect();
    setLoading(false);
  };

  const beginConnect = () => {
    if (getBlockchain() === "ALGO") {
      showModal(MODAL.PROVIDER_SELECT);
    } else {
      loadReachDefaults();
      doConnection();
    }
  };

  const doConnection = async () => {
    setLoading(true);
    try {
      await connect();
    } catch (e: any) {
      updateAsError(null, `Connection failed: ${e.message || e.toString()}`);
    }
    setLoading(false);
  };

  const connectUsing = async (prov: string) => {
    if (loading || store.getState().address) return;
    hideModal();
    const setFallback = PROVIDERS[prov];
    if (setFallback) {
      setFallback();
      doConnection();
    }
  };

  useEffect(() => {
    const { exists, addr } = checkSessionExists();
    const shouldConnect = exists && addr !== address;
    if (shouldConnect) resumeSession();
  }, []);

  // Connected User
  if (btnState === CWBUTTON.CONNECTED) return <ConnectedButton />;

  // Error state (reload page)
  if (btnState === CWBUTTON.ERROR) return <RetryConnection />;

  return (
    <>
      <CWBtn disabled={btnState !== CWBUTTON.CONNECT} onClick={beginConnect}>
        {loading ? (
          <span className="spinner--before" />
        ) : (
          <MIcon>account_balance_wallet</MIcon>
        )}
        <span>{btnState.valueOf()}</span>
      </CWBtn>

      {modal === MODAL.PROVIDER_SELECT && (
        <Modal title={modal.valueOf()} onClose={hideModal}>
          {checkSessionExists().exists ? (
            <SelectProviderGrid>
              <TransparentButton onClick={resumeSession}>
                <ImageLoader
                  src={checkSessionExists().isWCSession ? wcLogo : myAlgoLogo}
                  width={36}
                />
                Resume Session
              </TransparentButton>
            </SelectProviderGrid>
          ) : (
            <SelectProviderGrid>
              <TransparentButton onClick={() => connectUsing("MyAlgo")}>
                <ImageLoader src={myAlgoLogo} width={36} />
                <b>MyAlgo wallet</b>
              </TransparentButton>

              <TransparentButton onClick={() => connectUsing("WalletConnect")}>
                <ImageLoader src={wcLogo} width={36} />
                <b>{wcButtonText(isWCSession, address || "")}</b>
              </TransparentButton>
            </SelectProviderGrid>
          )}
        </Modal>
      )}
    </>
  );
};

export default ConnectWallet;
