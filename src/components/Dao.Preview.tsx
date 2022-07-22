import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import useGlobalUser from "hooks/globalUser";
import { $ButtonStyles, WideButton } from "components/Forms/Button";
import { getDaoView } from "reach/views/DaoView";
import { UnwrapPromise } from "types/shared";
import WalletNotFound from "./Reach/WalletNotFound";
import { FlexColumn } from "./Common/Containers";
import DaoStore from "state/daos";
import DaoDetails from "./Dao.Details";
import { Link } from "react-router-dom";

const $BtnStyles = css`
  ${$ButtonStyles}
  margin-bottom: 0.4rem;
  width: 100%;
`;
const ActionBtn = styled(WideButton)`
  ${$BtnStyles}
`;
const ActionLink = styled(Link)`
  ${$BtnStyles}
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
          <ActionLink type="button" to={`/dao/${daoId}/proposals/new`}>
            Create Proposal
          </ActionLink>

          {!view.isAdmin && <ActionBtn>Leave DAO</ActionBtn>}
        </FlexColumn>
      ) : (
        <ActionBtn type="button" disabled>
          Join DAO
        </ActionBtn>
      )}
    </section>
  );
}
