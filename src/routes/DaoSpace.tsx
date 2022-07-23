import { useState, useEffect } from "react";
import { PageContainer } from "components/Common/Containers";
import { listDaos } from "graphql/queries";
import { WideListView } from "components/Common/ListView";
import { ToggleListItemHoverable } from "components/Common/ToggleList";
import { truncateAccountString } from "utils";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { WideButton } from "components/Forms/Button";

const Bold = styled.h3.attrs({ className: "h5" })`
  font-weight: bold;
`;
const Description = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  font-size: smaller;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ListItemContainer = styled(ToggleListItemHoverable)`
  border-radius: 0.4rem;
  cursor: pointer;
  margin-bottom: 0.6rem;
  padding: 0.5rem 0.75rem;
`;

export type DaoItemProps = {
  id: string;
  name: string;
  description: string;
  founder: string;
  admin: string;
};

const DaoItem = (props: DaoItemProps) => {
  const { name, description, founder, admin } = props;
  const adminLbl = admin === founder ? "Founder/Admin" : "Admin";

  return (
    <ListItemContainer>
      <Bold>{name}</Bold>
      <p>
        <b>{adminLbl}</b> {truncateAccountString(admin)}
      </p>
      <Description>{description}</Description>
    </ListItemContainer>
  );
};

/** All publicly-listed DAOs */
export default function DaoSpace() {
  const [loading, setLoading] = useState(false);
  const [daos, setDaos] = useState<any[]>([]);
  const history = useHistory();
  const load = async () => {
    if (loading) return;
    setLoading(true);
    setDaos(await listDaos());
    setLoading(false);
  };
  const goToDao = (d: DaoItemProps) => history.push(`/dao/${d.id}/view`);

  useEffect(() => {
    load();
  }, []);

  return (
    <PageContainer>
      <h1>
        Hyperstar <span>Daos</span>
      </h1>

      <WideButton onClick={() => history.push("/dao/new")}>
        <b>Create DAO</b>
      </WideButton>

      {!loading && daos.length > 0 && (
        <WideListView data={daos} itemText={DaoItem} onItemClick={goToDao} />
      )}
    </PageContainer>
  );
}
