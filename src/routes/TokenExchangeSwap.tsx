import { parseAddress } from "@jackcom/reachduck";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import { useState, useEffect } from "react";
import store, { addNotification } from "state";
import { getExchangeById, removeExchange } from "state/exchanges";
import {
  BigValue,
  GridContainer,
  PageContainer
} from "components/Common/Containers";
import { createTokenExchangeAPI } from "reach/api/TokenExchangeAPI";
import { ExchangeView, loadExchangeView } from "reach/views/TokenExchangeView";
import Button from "components/Forms/Button";
import FundSwapForm from "components/SwapForm.Deposit";
import LoadingView from "components/Common/LoadingView";
import Modal from "components/Common/Modal";
import PublishSwap from "./PublishSwap";
import SwapForm from "components/SwapForm";
import { VIEWSTATE } from "types/shared";
import PoolDetails from "../components/PoolDetails";

const Page = styled(PageContainer)``;
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
  FUNDING = "Add Funds to Pool",
  PUBLISHING = "Publish New Pool",
  FUNDED = "Funded Pair",
  SWAPPING = "Swapping Tokens"
}

const TokenExchange = () => {
  const { poolId } = useParams<{ poolId: string }>();
  const { account, address } = store.getState();
  const [action, setViewAction] = useState<VIEWACTION>();
  const [viewState, setViewState] = useState<VIEWSTATE>();
  const [pool, setPool] = useState<ExchangeView>();
  const [poolAddr] = useState<any>(parseAddress(poolId));
  const [poolAPI, setAPI] = useState<any>();
  const history = useHistory();
  const startFundPool = () => {
    setViewState(VIEWSTATE.IDLE);
    setViewAction(VIEWACTION.FUNDING);
  };
  const closePool = async () => {
    await poolAPI?.closeTreasury().then(() => {
      removeExchange(pool?.ctcInfo);
      history.push("/swap");
    });
  };
  const loadError = () => {
    addNotification({
      msg: "Pool was not found!",
      error: true,
      time: new Date().getTime()
    });
    history.push("/swap");
  };
  const loadPoolAndAPI = async () => {
    if (!poolId || !account || viewState === VIEWSTATE.LOADING) return;

    setViewState(VIEWSTATE.LOADING);
    const fetched =
      getExchangeById(parseAddress(poolId)) ||
      (await loadExchangeView(poolId, account, true));

    if (fetched) {
      setPool(fetched);
      setAPI(createTokenExchangeAPI(fetched, account));
      setViewState(VIEWSTATE.IDLE);
    } else loadError();
  };
  const closeModal = () => setViewAction(VIEWACTION.IDLE);
  const convertToLarge = async (v: any) => {
    setViewAction(VIEWACTION.SWAPPING);
    await poolAPI?.convertToLarge(v);
    setViewAction(VIEWACTION.IDLE);
    loadPoolAndAPI();
  };
  const convertToSmall = async (v: any) => {
    setViewAction(VIEWACTION.SWAPPING);
    await poolAPI?.convertToSmall(v);
    setViewAction(VIEWACTION.IDLE);
    loadPoolAndAPI();
  };
  const fundPool = async (data: any) => {
    setViewState(VIEWSTATE.SUBMITTING);
    try {
      await poolAPI?.payTreasury(data);
      loadPoolAndAPI();
      setViewAction(VIEWACTION.FUNDED);
      setViewState(VIEWSTATE.IDLE);
    } catch (error) {
      setViewState(VIEWSTATE.FUND_ERROR);
    }
  };

  useEffect(() => {
    loadPoolAndAPI();
  }, []);

  if (!pool || viewState === VIEWSTATE.LOADING)
    return <LoadingView msg="Loading pool ..." />;

  return (
    <Page padded>
      <PoolDetails
        poolId={pool.ctcInfo}
        fundPool={startFundPool}
        closePool={closePool}
      />

      {/* Swap Form */}

      {pool.smallBal === "0" && pool.largeBal === "0" ? (
        <p>This pool is empty and cannot be used for swapping.</p>
      ) : (
        <SwapForm
          {...pool}
          disabled={action === VIEWACTION.SWAPPING}
          convertToLarge={convertToLarge}
          convertToSmall={convertToSmall}
        />
      )}

      {![VIEWACTION.IDLE, VIEWACTION.SWAPPING, undefined].includes(action) && (
        // Modal
        <Modal onClose={closeModal} title={action?.valueOf()}>
          {viewState === VIEWSTATE.FUND_ERROR && pool && <FundPoolError />}

          {viewState === VIEWSTATE.SUBMITTING ? (
            <p>Processing: please follow any wallet prompts ...</p>
          ) : (
            <>
              {action === VIEWACTION.FUNDING && pool && (
                <FundSwapForm exchange={pool} onFundPool={fundPool} />
              )}

              {action === VIEWACTION.FUNDED && (
                <>
                  <BigValue>Pool Funded!</BigValue>
                  <Button size="lg" onClick={closeModal}>
                    Exit
                  </Button>
                </>
              )}

              {action === VIEWACTION.PUBLISHING && (
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

      <GridControls className={pool?.admin === address ? "admin" : ""}>
        {pool && (
          <Button onClick={() => poolAPI?.viewBalance()}>
            <b>💰 Pool Balance</b>
          </Button>
        )}
      </GridControls>
    </Page>
  );
};

export default TokenExchange;
function FundPoolError() {
  return (
    <div>
      <h3 className="h4">
        <b className="error--text">Your request was not completed</b>
      </h3>
      <p>
        There was an issue funding the pool. Please check your token balances
        before trying again.
      </p>
    </div>
  );
}
