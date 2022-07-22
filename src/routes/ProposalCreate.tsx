import { useMemo, useState } from "react";
import ADI from "ADI";
import { PageContainer } from "components/Common/Containers";
import CreateDaoForm from "components/DaoForm.Create";
import EditDaoForm from "components/DaoForm.Edit";
import {
  createDaoContract,
  DaoDeployerOpts,
  publishDAO
} from "reach/participants/DaoAdmin";
import { HSDao } from "graphql/types";
import useGlobalUser from "hooks/globalUser";
import { useHistory } from "react-router";
import DaoStore from "state/daos";
import useGlobalDAO from "hooks/globalDAO";
import CreateProposalForm from "components/ProposalForm.Create";
import LoadingView from "components/Common/LoadingView";

const R_KEY = "recover-dao";

export default function ProposalCreate() {
  const history = useHistory();
  const { account, address } = useGlobalUser();
  const { recoveringDAO, dao, loadingDAO } = useGlobalDAO();
  const needsRecovery = useMemo(
    () => Boolean(address && recoveringDAO),
    [address, recoveringDAO]
  );
  const deploy = async (d: DaoDeployerOpts) => {
    if (!(address && d)) return;
    const daoCtc = await createDaoContract(account, d);
    if (daoCtc !== null) ADI.cacheItem("dao", daoCtc.toString());
  };
  // Recovery
  const pubProposal = async (d: HSDao) => {
    if (!(address && recoveringDAO)) return;
    if (needsRecovery) localStorage.removeItem(R_KEY);
    await publishDAO(recoveringDAO, d);
    DaoStore.reset(); // clear selected DAO from state
    history.push("/dao/");
  };

  if (loadingDAO) return <LoadingView msg="Loading DAO ..." />;
  if (!dao)
    return <LoadingView msg="DAO with this contract address was not found" />;

  return (
    <PageContainer>
      <h1>{`${dao.name} Governance`}</h1>

      {needsRecovery ? (
        <EditDaoForm onSubmit={pubProposal} />
      ) : (
        <CreateProposalForm onSubmit={deploy} dao={dao} />
      )}
    </PageContainer>
  );
}
