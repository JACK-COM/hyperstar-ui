import { PageContainer } from "components/Common/Containers";
import { useHistory, useParams } from "react-router";
import EditDaoForm from "components/DaoForm.Edit";
import useGlobalUser from "hooks/globalUser";
import { publishDAO } from "reach/participants/DaoAdmin";
import { HSDao } from "graphql/types";
import DaoStore from "state/daos";

export default function DaoEdit() {
  const history = useHistory();
  const { address } = useGlobalUser();
  const { id: daoId } = useParams<{ id: string }>();
  const submitChanges = async (dao: HSDao) => {
    if (!address || !daoId) return;
    await publishDAO(daoId, dao);
    DaoStore.reset();
    history.push("/dao/");
  };

  return (
    <PageContainer>
      <h1>
        <span>Edit</span> DAO
      </h1>

      {daoId ? (
        <EditDaoForm onSubmit={submitChanges} />
      ) : (
        <p>No DAO selected. (How did you ... get here?)</p>
      )}
    </PageContainer>
  );
}
