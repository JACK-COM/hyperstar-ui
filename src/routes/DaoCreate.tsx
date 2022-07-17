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

const R_KEY = "recover-dao";

export default function DaoCreate() {
  const history = useHistory();
  const { account, address } = useGlobalUser();
  const [recover] = useState(localStorage.getItem(R_KEY) || "");
  const needsRecovery = useMemo(
    () => Boolean(address && recover),
    [address, recover]
  );
  const deploy = async (d: DaoDeployerOpts) => {
    if (!(address && d)) return;
    const daoCtc = await createDaoContract(account, d);
    if (daoCtc !== null) ADI.cacheItem("dao", daoCtc.toString());
  };
  // Recovery
  const pubDao = async (dao: HSDao) => {
    if (!(address && recover)) return;
    if (needsRecovery) localStorage.removeItem(R_KEY);
    await publishDAO(recover, dao);
    DaoStore.reset(); // clear selected DAO from state
    history.push("/dao/");
  };

  return (
    <PageContainer>
      <h1>
        Welcome to <span>DaoSpace</span>
      </h1>

      {needsRecovery ? (
        <EditDaoForm onSubmit={pubDao} />
      ) : (
        <CreateDaoForm onSubmit={deploy} />
      )}
    </PageContainer>
  );
}
