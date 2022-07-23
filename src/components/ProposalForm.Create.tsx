import styled, { css } from "styled-components";
import { useMemo, useState } from "react";
import useGlobalModal from "hooks/globalModal";
import useGlobalUser from "hooks/globalUser";
import { Fieldset, Form, Input, Legend } from "components/Forms/Form";
import { ClickableStrong, FlexColumn } from "./Common/Containers";
import { UIDao } from "reach/views/DaoView";
import { ToggleList, ToggleListItemHoverable } from "./Common/ToggleList";
import {
  ChangeAdminProposition,
  ProposalType,
  Proposition,
  UIProposalType
} from "types/dao";
import { proposalTypes } from "constants/dao";
import JsonSchemaForm from "components/JsonSchemaForm";
import {
  UISchemaData,
  proposalActionSchema,
  schemaData,
  validateSchemaData,
  UIJsonSchema
} from "types/proposal-schema";
import { WideButton } from "./Forms/Button";
import { createReachAPI } from "@jackcom/reachduck";

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
const SchemaForm = styled(JsonSchemaForm)`
  display: flex;
  flex-direction: column;
  ${fieldsetCSS}
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

type FormProps = { onSubmit(d: Proposition): any; dao: UIDao };

const UINone = { text: "Select an action", type: ProposalType.NONE };

export default function CreateProposalForm(props: FormProps) {
  const { onSubmit, dao } = props;
  const { showModal, MODAL } = useGlobalModal();
  const { address } = useGlobalUser();
  const [action, setAction] = useState<UIProposalType>(UINone);
  const [schema, setSchema] = useState<UIJsonSchema | null>(null);
  const [data, setData] = useState<UISchemaData>(null);
  const [selectingAction, setSelectingAction] = useState(false);
  const submitText = useMemo(
    () => (address ? "Create Proposal" : "Connect to begin"),
    [address]
  );
  const isInvalid = useMemo(
    () =>
      action === UINone ||
      (!dao.isAdmin && action.type === ProposalType.STOP) ||
      !validateSchemaData(data, schema),
    [action, data, schema]
  );
  const selectAction = async (d: UIProposalType) => {
    setSelectingAction(false);
    if (d.text === action.text) return;

    setAction(d);
    setSchema(proposalActionSchema(d));
    setData(schemaData(d, dao));
  };
  const onData = (d: UISchemaData) =>
    d ? setData((old) => ({ ...old, ...d })) : setData(d);

  const maybeSubmit = async (): Promise<void> => {
    if (isInvalid) return;
    if (!address) {
      showModal(MODAL.PROVIDER_SELECT);
      return;
    }

    const stdlib = createReachAPI();
    const toDo = action.type.valueOf() as Proposition["0"];
    const src = data as ChangeAdminProposition;
    const fData = src?.fee
      ? {
          ...data,
          fee: stdlib.parseCurrency(src.fee),
          quorum: stdlib.bigNumberify(src.quorum)
        }
      : data;
    onSubmit([toDo, fData as any]);
  };
  const filteredTypes = dao.isAdmin
    ? proposalTypes
    : proposalTypes.filter((t) => t.type !== ProposalType.STOP);

  return (
    <section>
      <h2>Create a Proposal</h2>
      <FormDesc hide={!address}>
        Enter <b>information</b> about your Proposal.
      </FormDesc>

      <Form name="selectActionForm" onSubmit={(e) => e.preventDefault()}>
        <Fields disabled={!address}>
          <Legend>Proposal Type</Legend>
          <SelectProposalType
            onClick={() => setSelectingAction(!selectingAction)}
          >
            {action.text}
          </SelectProposalType>

          {selectingAction && (
            <ProposalTypes
              data={filteredTypes}
              onItemClick={(d) => selectAction(d)}
              itemText={(d) => (
                <ToggleListItemHoverable>{d.text}</ToggleListItemHoverable>
              )}
            />
          )}
        </Fields>
      </Form>

      {schema && (
        <FlexColumn>
          <h4>{action.text}</h4>
          <SchemaForm schema={schema} values={data} onChange={onData} />
        </FlexColumn>
      )}

      <WideButton type="button" disabled={isInvalid} onClick={maybeSubmit}>
        <b>{submitText}</b>
      </WideButton>
    </section>
  );
}
