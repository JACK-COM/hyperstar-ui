import { ComponentProps, PureComponent } from "react";
import { Link } from "react-router-dom";
import SalesStore from "state/sale";
import { PageContainer } from "components/Common/Containers";
import { AdjustableListGrid, gridClass } from "components/Common/ListView";
import { Hint } from "components/Forms/Form";
import styled from "styled-components";
import SaleListItem from "components/SaleListItem";
import LoadingView from "components/Common/LoadingView";
import { Sale } from "reach/views/MarketView";
import ADI from "ADI";

const Market = styled(PageContainer)`
  max-width: 100vw;
`;

type MarketState = {
  loading: boolean;
  items: Sale[];
  className: string;
};

export default class Marketplace extends PureComponent {
  unsubscribe: any;

  mounted: boolean;

  constructor(props: ComponentProps<any>) {
    super(props);
    const { items } = SalesStore.getState();
    const state: MarketState = {
      loading: items.length === 0,
      className: gridClass(items.length),
      items,
    };

    this.state = state;
    this.mounted = false;
    this.unsubscribe = SalesStore.subscribeToKeys(
      ({ items: stItems = [] }) => {
        if (!this.mounted) return;

        const { loading } = this.state as MarketState;
        const updates: Partial<MarketState> = {};
        updates.items = stItems;
        updates.className = gridClass(stItems.length);
        if (loading) updates.loading = false;

        this.setState((s) => ({ ...s, ...updates }));
      },
      ["items"]
    );

    ADI.publishItems({ cacheKey: "listings" });
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { loading, className, items } = this.state as MarketState;
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
}
