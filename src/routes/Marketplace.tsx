import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SalesStore, { addSale } from "state/sale";
import { PageContainer } from "components/Common/Containers";
import { AdjustableListGrid, gridClass } from "components/Common/ListView";
import { Hint } from "components/Forms/Form";
import SaleListItem from "components/SaleListItem";
import LoadingView from "components/Common/LoadingView";
import { Sale } from "reach/views/MarketView";
import { listMarketplaceItems } from "graphql/queries";

const Market = styled(PageContainer)`
  max-width: 100vw;
`;

export default function Marketplace() {
  const { items: stateItems } = SalesStore.getState();
  const [items, setItems] = useState<Sale[]>(stateItems);
  const [loading, setLoading] = useState(true);
  const className = useMemo(() => gridClass(items.length), [items]);
  const load = async () => {
    const it = await listMarketplaceItems();
    it.forEach(addSale);
    setLoading(false);
  };

  useEffect(() => {
    load();
    return SalesStore.subscribeToKeys(
      ({ items: i = [] }) => setItems(i),
      ["items"]
    );
  }, []);

  if (loading) return <LoadingView msg="Loading marketplace..." />;

  return (
    <Market>
      <h1 className="h2">Marketplace</h1>
      <Hint>All active listings from sellers just like you!</Hint>

      {!items.length && (
        <p>
          Nothing has been listed yet.&nbsp;
          <b>
            <Link to="/sell">Be the first!</Link>
          </b>
        </p>
      )}

      <AdjustableListGrid
        className={className}
        row
        data={items}
        itemText={(d: any) => <SaleListItem {...d} />}
      />
    </Market>
  );
}
