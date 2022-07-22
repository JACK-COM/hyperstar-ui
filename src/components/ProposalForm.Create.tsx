import styled, { css } from "styled-components";
import { useMemo, useState } from "react";
import useGlobalModal from "hooks/globalModal";
import useGlobalUser from "hooks/globalUser";
import { WideButton } from "components/Forms/Button";
import { Fieldset, Form, Input, Legend, Textarea } from "components/Forms/Form";
import { Radio } from "components/Forms/Radio";
import { ClickableStrong, FlexColumn } from "./Common/Containers";
import { DaoDeployerOpts } from "reach/participants/DaoAdmin";
import { UIDao } from "reach/views/DaoView";
import { ToggleList, ToggleListItemHoverable } from "./Common/ToggleList";
import {
  proposalActionText,
  ProposalActionType,
  proposalTypes
} from "types/dao.contract";

const animHide = "slide-up-fade-out";
const animShow = "slide-down-fade-in";
const fieldsetCSS = css`
  > ${Input} {
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 80%;
  }
`;
const FormDesc = styled.p<{ hide?: boolean }>`
  animation: ${({ hide }) => (hide ? animHide : animShow)};
  transition: height 350ms linear;
  height: ${({ hide }) => (hide ? 0 : "auto")};
  overflow: hidden;
`;
const FieldGrid = styled(Fieldset)`
  display: grid;
  gap: 0.4rem;
  grid-template-columns: repeat(2, 1fr);
  ${fieldsetCSS}
  ${FormDesc} {
    grid-column: 1 / grid-column-end;
  }
`;
const Fields = styled(Fieldset)`
  display: flex;
  flex-direction: column;
  ${fieldsetCSS}
`;
const SelectProposalType = styled(ClickableStrong)`
  height: 2.1rem;
  line-height: 2.1rem;
`;
const ProposalTypes = styled(ToggleList)`
  right: 0;
  width: 100%;
`;

type FormProps = { onSubmit(d: DaoDeployerOpts): any; dao: UIDao };

export default function CreateProposalForm(props: FormProps) {
  const { onSubmit, dao } = props;
  const { showModal, MODAL } = useGlobalModal();
  const { address } = useGlobalUser();
  const [action, setAction] = useState<ProposalActionType>(
    ProposalActionType.NONE
  );
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [fee, setFee] = useState(0);
  const [selectingAction, setSelectingAction] = useState(false);
  const [openTreasury, setOpenTreasury] = useState(true);
  const [registerSelf, setRegisterSelf] = useState(true);
  const formData = useMemo<DaoDeployerOpts>(
    () => ({ name, description, fee, openTreasury, quorum: 1, registerSelf }),
    [name, fee, openTreasury, registerSelf]
  );
  const submitText = useMemo(
    () => (address ? "Create Proposal" : "Connect to begin"),
    [address]
  );
  const isInvalid = useMemo(() => Boolean(address && !name), [name, address]);
  const onFee = (f: string) => setFee(Math.max(Number(f), 0));
  const selectAction = async (d: ProposalActionType) => {
    setAction(d);
    setSelectingAction(false);
  };
  const maybeSubmit = async (): Promise<void> => {
    if (isInvalid) return;
    if (!address) {
      showModal(MODAL.PROVIDER_SELECT);
    } else onSubmit(formData);
  };

  return (
    <section>
      <h2>Create a Proposal</h2>
      <FormDesc hide={!address}>
        Enter <b>information</b> about your Proposal.
      </FormDesc>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Fields disabled={!address}>
          <Legend>Proposal Type</Legend>
          <SelectProposalType onClick={() => setSelectingAction(true)}>
            {proposalActionText(action, dao)}
          </SelectProposalType>

          {selectingAction && (
            <ProposalTypes
              data={proposalTypes}
              onItemClick={(d) => selectAction(d)}
              itemText={(d) => (
                <ToggleListItemHoverable>
                  {proposalActionText(d, dao)}
                </ToggleListItemHoverable>
              )}
            />
          )}
        </Fields>

        <FieldGrid disabled={!address}>
          <FlexColumn>
            <h4>Membership Fee</h4>
            <Input
              type="number"
              min={0}
              pattern="0-9"
              placeholder="(Leave blank for free membership)"
              onChange={({ target }) => onFee(target.value)}
            />
          </FlexColumn>

          <FlexColumn>
            <h4>Voting Quorum</h4>

            <Input
              type="number"
              min={0}
              pattern="0-9"
              placeholder="(Leave blank for free membership)"
              value={1}
              disabled
            />
          </FlexColumn>

          {address && (
            <FormDesc>
              Your <b>voting quorum</b> determines the minimum number of votes
              required before a <b>Governance Proposal</b> is auto-resolved. It
              starts at <b>1</b>, but can be changed by a{" "}
              <b>Governance Proposal</b>.
            </FormDesc>
          )}
        </FieldGrid>

        <WideButton type="button" disabled={isInvalid} onClick={maybeSubmit}>
          <b>{submitText}</b>
        </WideButton>
      </Form>
    </section>
  );
}
