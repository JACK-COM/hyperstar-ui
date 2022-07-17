import { useState } from "react";
import { PageContainer } from "components/Common/Containers";
import PreviewDao from "components/Dao.Preview";
import { useHistory, useParams } from "react-router";
import { Fieldset, Form, Input, Legend } from "components/Forms/Form";
import styled from "styled-components";

const CenterWide = styled(Fieldset)`
  place-content: center;
  > * {
    width: 100%;
  }
`;

export default function DaoInteract() {
  const history = useHistory();
  const { id: daoId } = useParams<{ id: string }>();
  const [localDaoId, setLocal] = useState("");

  return (
    <PageContainer>
      <h1>
        <span>DaoSpace</span> Interact
      </h1>

      {daoId ? (
        <PreviewDao daoId={daoId} />
      ) : (
        <Form onSubmit={() => history.push(`/dao/interact/${localDaoId}`)}>
          <CenterWide>
            <Legend>Enter DAO Contract Address</Legend>
            <Input
              placeholder="1122334455"
              onChange={({ target }) => setLocal(target.value)}
              value={localDaoId}
            />
          </CenterWide>
        </Form>
      )}
    </PageContainer>
  );
}
