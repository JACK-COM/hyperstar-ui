import styled from "styled-components";
import { useEffect, useState } from "react";
import useGlobalUser from "hooks/globalUser";
import { WideButton } from "components/Forms/Button";
import { getDaoView } from "reach/views/DaoView";
import { UnwrapPromise } from "types/shared";
import WalletNotFound from "./Reach/WalletNotFound";
import { FlexColumn } from "./Common/Containers";
import DaoStore from "state/daos";
import DaoDetails from "./Dao.Details";

const ActionBtn = styled(WideButton).attrs({ type: "button" })`
  font-weight: bold;
`;

type Props = { daoId: string };
type DaoView = UnwrapPromise<ReturnType<typeof getDaoView>>;

export default function PreviewDao(props: Props) {
  const { daoId } = props;
  const { account, address } = useGlobalUser();
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<DaoView>();
  // const [api, setAPI] = useState<any>();
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
    <section className="dao-preview">
      <DaoDetails dao={view} />

      <ActionBtn type="button" disabled>
        Make a donation
      </ActionBtn>

      {view.isMember ? (
        <FlexColumn>
          <ActionBtn type="button" disabled>
            Create Proposal
          </ActionBtn>
          <ActionBtn type="button" disabled>
            Leave DAO
          </ActionBtn>
        </FlexColumn>
      ) : (
        <WideButton type="button" disabled>
          Join DAO
        </WideButton>
      )}
    </section>
  );
}
