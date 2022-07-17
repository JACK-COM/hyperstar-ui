import styled, { css } from "styled-components";
import { useMemo, useState } from "react";
import useGlobalModal from "hooks/globalModal";
import useGlobalUser from "hooks/globalUser";
import { WideButton } from "components/Forms/Button";
import { Fieldset, Form, Input, Legend, Textarea } from "components/Forms/Form";
import { Radio } from "components/Forms/Radio";
import { FlexColumn } from "./Common/Containers";
import { DaoDeployerOpts } from "reach/participants/DaoAdmin";

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

type FormProps = { onSubmit(d: DaoDeployerOpts): any };

export default function CreateDaoForm(props: FormProps) {
  const { onSubmit } = props;
  const { showModal, MODAL } = useGlobalModal();
  const { address } = useGlobalUser();
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [fee, setFee] = useState(0);
  const [openTreasury, setOpenTreasury] = useState(true);
  const [registerSelf, setRegisterSelf] = useState(true);
  const formData = useMemo<DaoDeployerOpts>(
    () => ({ name, description, fee, openTreasury, quorum: 1, registerSelf }),
    [name, fee, openTreasury, registerSelf]
  );
  const submitText = useMemo(
    () => (address ? "Create DAO" : "Connect to begin"),
    [address]
  );
  const isInvalid = useMemo(() => Boolean(address && !name), [name, address]);
  const onFee = (f: string) => setFee(Math.max(Number(f), 0));
  const maybeSubmit = async (): Promise<void> => {
    if (isInvalid) return;
    if (!address) {
      showModal(MODAL.PROVIDER_SELECT);
    } else onSubmit(formData);
  };

  return (
    <section>
      <h2>Create a DAO</h2>
      <FormDesc hide={!address}>
        Enter <b>public information</b> about your DAO. This will be stored
        on-chain.
      </FormDesc>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Fields disabled={!address}>
          <Legend>Organization Name</Legend>
          <Input
            placeholder="My Awesome DAO"
            onChange={({ target }) => setName(target.value)}
          />

          <Textarea
            onChange={({ target }) => setDesc(target.value)}
            placeholder="Enter a description (max-length 512 characters)"
            maxLength={512}
          />
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

        <Fields disabled={!address}>
          <Legend>Allow self-registration?</Legend>

          <Radio
            name="selfRegister"
            onChange={(yn) => setRegisterSelf(yn)}
            checked={registerSelf}
          >
            <span>Yes</span>
          </Radio>

          <Radio
            name="selfRegister"
            onChange={(yn) => setRegisterSelf(yn)}
            checked={registerSelf}
          >
            <span>No</span>
          </Radio>

          <FormDesc hide={!address}>
            <b>Self-Registration</b> allows non-members to register for
            membership, once they pay the fee (if any). When disallowed, only
            existing members will be allowed to pay for and/or add new members.
          </FormDesc>
        </Fields>

        <Fields disabled={!address}>
          <Legend>
            Allow <b>open-treasury</b>
          </Legend>

          <Radio
            name="setOpenTreasury"
            checked={openTreasury}
            onChange={() => setOpenTreasury(true)}
          >
            <span>Yes</span>
          </Radio>

          <Radio
            name="setOpenTreasury"
            checked={!openTreasury}
            onChange={() => setOpenTreasury(false)}
          >
            <span>No</span>
          </Radio>

          <FormDesc hide={!address}>
            An <b>Open Treasury</b> allows a non-member to receive a
            fund-allocation from the DAO, if a request is successfully passed.
          </FormDesc>
        </Fields>

        <WideButton type="button" disabled={isInvalid} onClick={maybeSubmit}>
          <b>{submitText}</b>
        </WideButton>
      </Form>
    </section>
  );
}
