import styled, { css } from "styled-components";
import { useEffect, useMemo, useState } from "react";
import useGlobalUser from "hooks/globalUser";
import { WideButton } from "components/Forms/Button";
import { Fieldset, Form, Input, Legend, Textarea } from "components/Forms/Form";
import { getDaoView } from "reach/views/DaoView";
import { getBlockchain } from "@jackcom/reachduck";
import { UnwrapPromise } from "types/shared";
import { HSConnector, HSDao } from "graphql/types";
import { useParams } from "react-router";
import DaoStore from "state/daos";

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

type FormProps = { onSubmit(d: HSDao): any };
type DaoView = UnwrapPromise<ReturnType<typeof getDaoView>>;

export default function EditDaoForm(props: FormProps) {
  const { onSubmit } = props;
  const { id: daoId } = useParams<{ id?: string }>();
  const { account, address } = useGlobalUser();
  const [recovering, setRecovering] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [description, setDesc] = useState("");
  const [view, setView] = useState<DaoView>();
  const enabled = (v: boolean) => (v ? "enabled" : "disabled");
  const isInvalid = useMemo(() => !description, [description]);
  const formData = useMemo(
    () => ({
      ...view,
      description,
      private: false,
      connector: HSConnector.ALGO,
      created: new Date().toISOString()
    }),
    [view, description]
  );
  const load = async () => {
    if (view || !address || recovering || loading) return;

    const { selected } = DaoStore.getState();
    if (selected) {
      setView(selected);
      setDesc(selected.description || '');
      return;
    }

    const id = localStorage.getItem("recover-dao");
    setRecovering(id || undefined);
    setLoading(Boolean(id));
    const target = id || daoId;
    if (!target) return;

    const v = await getDaoView(account, target);
    if (v?.name && v?.admin) {
      setView(v);
      setDesc(v.description || '');
      DaoStore.selected(v);
    }
    setLoading(false);
  };
  const maybeSubmit = async (): Promise<void> => {
    if (isInvalid) return;
    onSubmit(formData as HSDao);
  };

  useEffect(() => {
    load();
  }, [address]);

  if (loading || !view) return <p>Loading DAO details ...</p>;

  return (
    <section>
      <h2>{view?.name || "DAO Recovery"}</h2>
      {recovering ? (
        <FormDesc>
          If you are here, you previously created a DAO, but were unable to get
          it publicly listed. You can do so here.
        </FormDesc>
      ) : (
        <FormDesc>
          Edit and re-publish your DAO description. The description is stored on
          Hyperstar servers, though the DAO and its operations are on the{" "}
          {getBlockchain()} network
        </FormDesc>
      )}

      <Form onSubmit={(e) => e.preventDefault()}>
        <Fields disabled={!account}>
          <Legend>Organization Name</Legend>
          <h3 className="h4">{view?.name}</h3>
        </Fields>

        <Fields disabled={!account}>
          <h4>{view?.name} description</h4>
          <Textarea
            maxLength={512}
            placeholder="Short description (max-length: 512)"
            onChange={({ target }) => setDesc(target.value)}
            value={description || ""}
          />
          <FormDesc>Characters remaining: {512 - description.length}</FormDesc>

          <FormDesc>
            Enter a <b>short description</b> for other users in Hyperstar. It
            will not be stored on-chain, and can be changed on Hyperstar by any{" "}
            <b>{view.name} admin</b>.
          </FormDesc>
        </Fields>

        <WideButton type="button" disabled={isInvalid} onClick={maybeSubmit}>
          <b>Publish DAO</b>
        </WideButton>

        <FieldGrid disabled={!account}>
          <h4>{`Membership Fee: ${view?.fee} ${getBlockchain()}`}</h4>
          <h4>{`Voting Quorum: ${view?.quorum} member(s)`}</h4>

          <FormDesc>
            <b>Voting quorum</b> determines the minimum number of votes required
            before a <b>Governance Proposal</b> is auto-resolved. It starts at{" "}
            <b>1</b> and can be changed by a <b>Governance Proposal</b>.
          </FormDesc>
        </FieldGrid>

        <Fields disabled={!account}>
          <Legend>{`Self-registration is ${enabled(
            view?.registerSelf
          )}`}</Legend>

          <FormDesc>
            <b>Self-Registration</b> allows non-members to register for
            membership, once they pay the fee (if any). When disallowed, only
            existing members will be allowed to pay for and/or add new members.
          </FormDesc>
        </Fields>

        <Fields disabled={!account}>
          <Legend>{`Open-treasury is ${enabled(view?.openTreasury)}`}</Legend>

          <FormDesc>
            An <b>Open Treasury</b> allows a non-member to receive a
            fund-allocation from the DAO, if a request is successfully passed.
          </FormDesc>
        </Fields>
      </Form>
    </section>
  );
}