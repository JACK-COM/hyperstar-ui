import {
  CapsLabel,
  GridContainer,
  PageContainer
} from "components/Common/Containers";
import useGlobalUser from "hooks/globalUser";
import useGlobalDAO from "hooks/globalDAO";
import LoadingView from "components/Common/LoadingView";
import { resetNotifications, updateAsError, updateNotification } from "state";
import { createProposalAnnouncerAPI } from "reach/participants/Announcers";
import { useEffect, useMemo, useState } from "react";
import { formatActiveProposal, proposalTitleByType } from "reach/views/DaoView";
import { Fieldset, Label, Legend } from "components/Forms/Form";
import styled from "styled-components";
import { WideButton } from "components/Forms/Button";
import { createDAOAPI } from "reach/api/DaoAPI";
import { useHistory } from "react-router";
import { isNone } from "@jackcom/reachduck";

const ProposalLabel = styled(Label).attrs({ direction: "row" })`
  .text {
    color: white;
    padding-left: 0.4rem;
  }
`;
const VoteBlock = styled(Fieldset)`
  margin-top: 15vmin;
`;
const ControlBlock = styled(GridContainer)`
  margin-top: 6vmin;
  gap: 0.3rem;
  grid-template-columns: repeat(2, 1fr);
`;

export default function ProposalVote() {
  const history = useHistory();
  const { account } = useGlobalUser();
  const { dao, loadingDAO } = useGlobalDAO();
  const api =
    account && dao ? createProposalAnnouncerAPI(account, dao.id) : null;
  const proposal = useMemo(() => dao?.proposal, [dao]);
  const data = useMemo(
    () => (proposal && dao ? formatActiveProposal(proposal, dao) : null),
    [proposal]
  );
  const [voting, setVoting] = useState(false);
  const sticky = { persistent: true, loading: true };
  const stickyDone = { persistent: true, loading: false };
  const redirectToDAO = () => history.push(`/dao/${dao?.id}/view`);
  const support = async () => {
    if (!dao || voting) return;
    const daoAPI = createDAOAPI(account, dao.id);
    const id = resetNotifications("🗳 Supporting Proposal ...", sticky);
    try {
      setVoting(true);
      await daoAPI?.supportProposal();
      updateNotification(id, "☑️ Vote complete!", stickyDone);
      redirectToDAO();
    } catch (error: any) {
      updateAsError(id, error);
    }

    setVoting(false);
  };

  const oppose = async () => {
    if (!dao || voting) return;
    const daoAPI = createDAOAPI(account, dao.id);
    const id = resetNotifications("🗳 Opposing Proposal ...", sticky);
    try {
      setVoting(true);
      await daoAPI?.opposeProposal();
      updateNotification(id, "☑️ Vote complete!", stickyDone);
      redirectToDAO();
    } catch (error: any) {
      updateAsError(id, error);
    }

    setVoting(false);
  };

  useEffect(() => {
    if (account && dao && api) api.subscribe();
  }, [dao]);

  if (loadingDAO) return <LoadingView msg="Loading DAO ..." />;
  if (!dao)
    return <LoadingView msg="DAO with this contract address was not found" />;
  if (!proposal || !data)
    return <LoadingView msg="No active proposals for this DAO" />;

  const format = (d: string | boolean) => {
    if (typeof d === "boolean")
      return d ? "Allowed/Enabled" : "Disallowed/disabled";

    return d;
  };

  return (
    <PageContainer>
      <h1>Governance</h1>
      <h2>{proposalTitleByType(proposal[0])}</h2>
      <CapsLabel>{dao.name}</CapsLabel>
      <VoteBlock>
        <Legend>{data.text}</Legend>

        {typeof data.value === "string" && (
          <Label>
            <span className="label">{data.valueLabel}</span>
            <span>{data.value}</span>
          </Label>
        )}

        {typeof data.value === "object" && (
          <>
            <ProposalLabel>
              <span className="label">From (old value)</span>
              <span className="text">{format(data.value.old)}</span>
            </ProposalLabel>

            <ProposalLabel>
              <span className="label">To (new value)</span>
              <span className="text">{format(data.value.new)}</span>
            </ProposalLabel>
          </>
        )}

        {isNone(proposal) ? (
          <WideButton onClick={redirectToDAO}>Return to DAO</WideButton>
        ) : (
          <>
            <Label>
              <span className="label">Total Votes:</span>
              <span>{dao.currentVotes}</span>
            </Label>

            <ControlBlock>
              <WideButton disabled={voting} onClick={support}>
                Support
              </WideButton>
              <WideButton disabled={voting} onClick={oppose}>
                Oppose
              </WideButton>
            </ControlBlock>
          </>
        )}
      </VoteBlock>
    </PageContainer>
  );
}
