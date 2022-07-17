import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import useGlobalUser from "hooks/globalUser";
import { WideButton } from "components/Forms/Button";
import { Legend } from "components/Forms/Form";
import { getDaoView } from "reach/views/DaoView";
import { getBlockchain } from "@jackcom/reachduck";
import { UnwrapPromise } from "types/shared";
import WalletNotFound from "./Reach/WalletNotFound";
import { FlexColumn, GridContainer } from "./Common/Containers";
import DaoStore from "state/daos";
import { useHistory } from "react-router";

const animHide = "slide-up-fade-out";
const animShow = "slide-down-fade-in";
const fieldsetCSS = css`
  text-align: left;
  p {
    font-size: 80%;
  }
`;
const ActionBtn = styled(WideButton).attrs({ type: "button" })`
  font-weight: bold;
`;
const FormDesc = styled.p<{ hide?: boolean }>`
  animation: ${({ hide }) => (hide ? animHide : animShow)};
  height: ${({ hide }) => (hide ? 0 : "auto")};
  overflow: hidden;
  text-align: left;
  transition: height 350ms linear;
`;
const FieldGrid = styled(GridContainer)`
  gap: 0.4rem;
  grid-template-columns: repeat(2, 1fr);
  ${fieldsetCSS}
  ${FormDesc} {
    grid-column: 1 / grid-column-end;
  }
`;
const Fields = styled.section`
  align-items: flex-start;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0;
  place-content: center;
  ${fieldsetCSS}
`;
const Spacer = styled.h3`
  padding: 4rem 0 2rem;
  text-align: left;
`;

type Props = { daoId: string };
type DaoView = UnwrapPromise<ReturnType<typeof getDaoView>> & {
  description?: string;
};

export default function PreviewDao(props: Props) {
  const { daoId } = props;
  const history = useHistory();
  const { account, address } = useGlobalUser();
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<DaoView>();
  // const [api, setAPI] = useState<any>();
  const enabled = (v: boolean) => (v ? "enabled" : "disabled");
  const load = async () => {
    if (!daoId || loading) return;

    setLoading(true);
    const next = await getDaoView(account, daoId);

    if (next?.id === daoId) {
      setView(next);
      DaoStore.selected(next);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (address && !view) load();
  }, [address]);

  if (!address) return <WalletNotFound />;
  if (loading) return <p>Loading DAO details ...</p>;
  if (!view) return <p>DAO details not found</p>;

  return (
    <section>
      <h2>{view.name}</h2>
      <FormDesc>{view.description || "No description provided"}</FormDesc>
      {view.isAdmin && (
        <ActionBtn
          type="button"
          onClick={() => history.push(`/dao/edit/${view.id}`)}
        >
          Edit description
        </ActionBtn>
      )}

      <Spacer>Details</Spacer>

      <FieldGrid>
        <h4>{`Membership Fee: ${view?.fee} ${getBlockchain()}`}</h4>
        <h4>{`Voting Quorum: ${view?.quorum} member(s)`}</h4>

        <FormDesc>
          <b>Voting quorum</b> determines the minimum number of votes required
          before a <b>Governance Proposal</b> is auto-resolved. It starts at{" "}
          <b>1</b> and can be changed by a <b>Governance Proposal</b>.
        </FormDesc>
      </FieldGrid>

      <Fields>
        <Legend>{`Self-registration is ${enabled(view?.registerSelf)}`}</Legend>

        <FormDesc>
          <b>Self-Registration</b> allows non-members to register for
          membership, once they pay the fee (if any). When disallowed, only
          existing members will be allowed to pay for and/or add new members.
        </FormDesc>
      </Fields>

      <Fields>
        <Legend>{`Open-treasury is ${enabled(view?.openTreasury)}`}</Legend>

        <FormDesc>
          An <b>Open Treasury</b> allows a non-member to receive a
          fund-allocation from the DAO, if the associaated request proposal is
          enacted.
        </FormDesc>
      </Fields>

      {view.isMember && (
        <FlexColumn>
          <ActionBtn type="button" disabled>
            Create Proposal
          </ActionBtn>
          <ActionBtn type="button" disabled>
            Leave DAO
          </ActionBtn>
        </FlexColumn>
      )}

      <ActionBtn type="button" disabled>
        Make a donation
      </ActionBtn>

      {!view.isMember && (
        <WideButton type="button" disabled>
          Join DAO
        </WideButton>
      )}
    </section>
  );
}
