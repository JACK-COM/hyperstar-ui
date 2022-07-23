import { PageContainer } from "components/Common/Containers";
import useGlobalUser from "hooks/globalUser";
import useGlobalDAO from "hooks/globalDAO";
import CreateProposalForm from "components/ProposalForm.Create";
import LoadingView from "components/Common/LoadingView";
import { Proposition } from "types/dao";
import { resetNotifications, updateAsError, updateNotification } from "state";
import { createDAOAPI } from "reach/api/DaoAPI";
import { useHistory } from "react-router";

export default function ProposalCreate() {
  const { account, address } = useGlobalUser();
  const { dao, loadingDAO } = useGlobalDAO();
  const api = account && dao ? createDAOAPI(account, dao.id) : null;
  const history = useHistory();
  const redirectToProposal = () => {
    history.push(`/dao/${dao?.id}/proposals/vote`);
  };
  const deploy = async (proposal: Proposition) => {
    if (!(address && proposal) || !api) return;
    const id = resetNotifications("👩‍⚖️ Creating Proposal ...", {
      persistent: true,
      loading: true
    });
    try {
      await api.registerProposal(proposal);
      updateNotification(id, `✅ Proposal was created!`, {
        persistent: true,
        loading: false
      });
      setTimeout(redirectToProposal, 3500);
    } catch (error: any) {
      updateAsError(id, `❌ ${error}`);
    }
  };

  if (loadingDAO) return <LoadingView msg="Loading DAO ..." />;
  if (!dao)
    return <LoadingView msg="DAO with this contract address was not found" />;

  return (
    <PageContainer>
      <h1>{`${dao.name} Governance`}</h1>
      <CreateProposalForm onSubmit={deploy} dao={dao} />
    </PageContainer>
  );
}
