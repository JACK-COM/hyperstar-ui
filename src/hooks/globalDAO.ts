import { useEffect, useState } from "react";
import useGlobalUser from "hooks/globalUser";
import { getDaoView } from "reach/views/DaoView";
import { UnwrapPromise } from "types/shared";
import { useParams } from "react-router";
import DaoStore from "state/daos";

type DaoView = UnwrapPromise<ReturnType<typeof getDaoView>>;
const R_KEY = "recover-dao";

export default function useGlobalDAO() {
  const { id: daoId } = useParams<{ id?: string }>();
  const { account, address } = useGlobalUser();
  const [dao, setDao] = useState<DaoView>();
  const [recovering, setRecovering] = useState<string>();
  const [loading, setLoading] = useState(false);
  const load = async () => {
    if (dao || !address || recovering || loading) return;

    const { selected } = DaoStore.getState();
    if (selected && selected.id === daoId) {
      setDao(selected);
      setLoading(false);
      return;
    }

    const id = localStorage.getItem(R_KEY);
    setRecovering(id || undefined);
    setLoading(Boolean(id));
    const target = id || daoId;
    if (!target) return;

    const v = await getDaoView(account, target);
    if (v?.name && v?.admin) {
      setDao(v);
      DaoStore.selected(v);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (address) load();
  }, [address]);

  return {
    dao,
    loadingDAO: loading,
    recoveringDAO: recovering
  };
}
