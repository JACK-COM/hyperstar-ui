import { PageContainer } from "components/Common/Containers";
import { WideButton } from "components/Forms/Button";
import useGlobalModal from "hooks/globalModal";
import styled from "styled-components";

const Wrapper = styled(PageContainer)`
  min-height: 75vh;
  place-content: center;
`;
const WalletNotFound = (): JSX.Element => {
  const { MODAL, showModal } = useGlobalModal();

  return (
    <Wrapper>
      <h1>No Wallet Found!</h1>

      <p>
        Some features require connecting to a blockchain. Please ensure a wallet
        extension is installed and enabled, and that you are signed in.
      </p>

      <WideButton onClick={() => showModal(MODAL.PROVIDER_SELECT)}>
        Connect
      </WideButton>
    </Wrapper>
  );
};

export default WalletNotFound;
