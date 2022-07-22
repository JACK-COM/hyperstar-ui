import styled from "styled-components";
import { useState, useEffect } from "react";
import store, { updateAsError } from "state";
import ExchangeStore from "state/exchanges";
import {
  BigValue,
  GridContainer,
  Hero,
  PageContainer,
} from "components/Common/Containers";
import { createTExContract } from "reach/participants/TokenExchangeAdmin";
import { ExchangeView } from "reach/views/TokenExchangeView";
import { TransparentButton } from "components/Forms/Button";
import CreateSwapForm from "components/SwapForm.Create";
import CryptoIcon from "components/Reach/CryptoIcon";
import LoadingView from "components/Common/LoadingView";
import Modal from "components/Common/Modal";
import PublishSwap from "./PublishSwap";
import ExchangesList from "../components/ExchangesList";
import { VIEWSTATE } from "types/shared";
import creamlogo from "assets/cream-logo.png";
import ImageLoader from "components/Common/ImageLoader";

const Page = styled(PageContainer)`
  place-content: center;
`;
const PageHero = styled(Hero)`
  margin-bottom: 0;

  @media screen and (max-width: 600px) {
    ${BigValue} {
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
const Title = styled.h1`
  align-items: center;
  display: grid;
  gap: 0.6rem;
  grid-template-columns: repeat(2, minmax(min-content, auto));
  place-content: center;
`;
const CreatePoolBtn = styled(TransparentButton)`
  display: flex;
  flex-direction: column;
`;
const GridControls = styled(GridContainer)`
  margin-bottom: ${({ theme }) => theme.sizes.sm};
  padding: ${({ theme }) => theme.sizes.sm} 0;
  grid-template-columns:
    100%
    100%;
`;
// eslint-disable-next-line no-shadow
enum VIEWACTION {
  IDLE = "0",
  CREATING = "Create Exchange Pair",
  PUBLISHING = "Publish New Pool",
  SWAPPING = "Swapping Tokens",
}

const CreamSwap = () => {
  const { CREATING, PUBLISHING, IDLE } = VIEWACTION;
  const { exchanges } = ExchangeStore.getState();
  const { account, assets: allAssets } = store.getState();
  const [assets, setAssets] = useState<any[]>(allAssets);
  const [action, setViewAction] = useState<VIEWACTION>();
  const [viewState, setViewState] = useState<VIEWSTATE>();
  const [pools, setPools] = useState<ExchangeView[]>(exchanges);
  const [poolAddr, setPoolAddr] = useState<any>();
  const closeModal = () => setViewAction(IDLE);
  const startCreatePair = () => {
    setViewState(VIEWSTATE.IDLE);
    setViewAction(CREATING);
  };
  const createPair = async (formData: any) => {
    setViewState(VIEWSTATE.SUBMITTING);
    try {
      const newPool = await createTExContract(formData, account);
      if (newPool === null) throw new Error("");

      setPoolAddr(newPool);
      setViewAction(PUBLISHING);
      setViewState(VIEWSTATE.IDLE);
    } catch (error: any) {
      updateAsError(null, `Pool creation failed ${error.toString()}`);
      setViewState(VIEWSTATE.IDLE);
    }
  };

  useEffect(() => {
    const unsubStore = store.subscribeToKeys(
      ({ assets: a }) => Array.isArray(a) && setAssets(a),
      ["assets"]
    );
    const unsubPools = ExchangeStore.subscribeToKeys(
      ({ exchanges: e }) => Array.isArray(e) && setPools(e),
      ["exchanges"]
    );

    return function cleanup() {
      unsubStore();
      unsubPools();
    };
  }, []);

  if (viewState === VIEWSTATE.LOADING)
    return <LoadingView msg="Loading pool ..." />;

  return (
    <Page padded>
      <Title className="h2">
        <ImageLoader src={creamlogo} width={40} />
        <span>CREAMSwap</span>
      </Title>

      <PageHero>
        <p>
          Exchange one <b className="secondary--text">asset unit</b> for another
          at a <b className="error--text">fixed</b> rate.
        </p>

        <p>
          The rate is set when the pool is created, and cannot be
          changed.&nbsp;Unlike a regular DEx,&nbsp;
          <b className="secondary--text">
            there is no reward for creating a pool
          </b>
          &nbsp; aside from giving your token some utility.
        </p>
      </PageHero>

      {Boolean(action) && action !== IDLE && (
        // Modal
        <Modal onClose={closeModal} title={action?.valueOf()}>
          {viewState === VIEWSTATE.SUBMITTING ? (
            <p>Processing: please follow any wallet prompts ...</p>
          ) : (
            <>
              {action === CREATING && (
                <CreateSwapForm assets={assets} onCreate={createPair} />
              )}

              {action === PUBLISHING && (
                <PublishSwap
                  ctc={poolAddr}
                  onContractPublished={closeModal}
                  onDismiss={closeModal}
                />
              )}
            </>
          )}
        </Modal>
      )}

      <GridControls>
        <CreatePoolBtn size="lg" onClick={startCreatePair}>
          <span>
            <CryptoIcon iconOnly symbol="NONE" color />
            &nbsp;↔&nbsp;
            <CryptoIcon iconOnly symbol="NONE" color />
          </span>
          <b>Create a Pool</b>
        </CreatePoolBtn>
      </GridControls>

      {(!action || action === IDLE) && <ExchangesList exchanges={pools} />}
    </Page>
  );
};

export default CreamSwap;
