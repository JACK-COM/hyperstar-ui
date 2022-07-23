import styled, { css } from "styled-components";
import { WideButton } from "components/Forms/Button";
import { UIDao } from "reach/views/DaoView";
import { getBlockchain } from "@jackcom/reachduck";
import {
  BigValue,
  CapsLabel,
  FlexColumn,
  GridContainer
} from "./Common/Containers";
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
const FormDesc = styled.div<{ hide?: boolean }>`
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
const Spacer = styled.h3`
  padding: 4rem 0 2rem;
  text-align: left;
`;
const TextSection = styled.div`
  border: 1px solid #f3db5899;
  border-radius: 0.4rem;
  padding: 0.5rem;
  margin: 1rem 0;
  text-align: left;
`;

type Props = { dao: UIDao };

export default function DaoDetails(props: Props) {
  const { dao } = props;
  const history = useHistory();
  const enabled = (tf: boolean) => (tf ? "enabled" : "disabled");

  return (
    <section className="dao-details">
      <h2>{dao.name}</h2>
      <TextSection>{dao.description || "No description provided"}</TextSection>
      {dao.isAdmin && (
        <ActionBtn
          type="button"
          onClick={() => history.push(`/dao/${dao.id}/edit`)}
        >
          Edit description
        </ActionBtn>
      )}

      <Spacer>Details</Spacer>

      <FieldGrid>
        <FlexColumn>
          <CapsLabel>Membership Fee</CapsLabel>
          <BigValue>
            {dao.fee === "0" ? "Free" : `${dao.fee} ${getBlockchain()}`}
          </BigValue>
        </FlexColumn>

        <FlexColumn>
          <CapsLabel>Voting Quorum</CapsLabel>
          <BigValue>{dao.quorum}</BigValue>
        </FlexColumn>

        <FormDesc>
          <b>Voting quorum</b> determines the minimum number of votes required
          before a <b>Governance Proposal</b> is auto-resolved. It starts at{" "}
          <b>1</b> and can be changed by a <b>Governance Proposal</b>.
        </FormDesc>
      </FieldGrid>

      <Spacer />

      <FieldGrid>
        <FlexColumn>
          <CapsLabel>Membership</CapsLabel>
          <BigValue>{dao.registerSelf ? "Open" : "Invitation"}</BigValue>
        </FlexColumn>

        <FlexColumn>
          <CapsLabel>Treasury</CapsLabel>
          <BigValue>{dao.openTreasury ? "Open" : "Members"}</BigValue>
        </FlexColumn>
      </FieldGrid>

      <TextSection>
        <h5>{`Self-registration is ${enabled(dao.registerSelf)}`}</h5>
        <p>
          <b>Self-Registration</b> allows non-members to register for
          membership, once they pay the fee (if any). When disallowed, only
          existing members will be allowed to pay for and/or add new members.
        </p>
      </TextSection>

      <TextSection>
        <h5>{`Open Treasury is ${enabled(dao.openTreasury)}`}</h5>
        <p>
          An <b>Open Treasury</b> allows a non-member to receive a
          fund-allocation from the DAO, if the associaated request proposal is
          enacted.
        </p>
      </TextSection>
    </section>
  );
}
