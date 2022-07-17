import { parseAddress } from "@jackcom/reachduck";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { loadSale, Sale } from "reach/views/MarketView";
import store from "state";
import { truncateAccountString } from "utils";
import SalesStore from "state/sale";
import {
  BigValue,
  CapsLabel,
  GridContainer,
  Figure,
  FlexRow,
  PageContainer,
} from "components/Common/Containers";
import LoadingView from "components/Common/LoadingView";
import ImageLoader from "components/Common/ImageLoader";
import BuyNowControls from "components/BuyNowControls";

const Wrapper = styled(PageContainer)`
  max-width: 90vmin;
`;
const Display = styled(GridContainer)`
  align-items: stretch;
  margin: ${({ theme }) => theme.sizes.md} 0;
  grid-template-columns: 66.66% 33.33%;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
const SaleImage = styled(ImageLoader)`
  border: 1vmin solid ${({ theme }) => theme.colors.semitransparent};

  img {
    max-width: 480px;
  }
`;

export default function BuyNFT() {
  const { account } = store.getState();
  const { assetId } = useParams<{ assetId: any }>();
  const [sale, setSale] = useState<Partial<Sale>>();
  const [loading, setLoading] = useState(!sale);
  const [qty, setQty] = useState(0);
  const getSelected = async () => {
    if (sale?.price || sale?.closed) return;

    const ctcInfo = parseAddress(assetId);
    const { items } = SalesStore.getState();
    const item =
      items.find((i) => i.ctc === ctcInfo) ||
      (await loadSale(ctcInfo, account, true));

    setSale(item);
    if (item?.qty === 1) setQty(1);
    setLoading(false);
  };

  useEffect(() => {
    getSelected();
    return SalesStore.subscribeOnce(getSelected, "items");
  }, [sale]);

  if (loading) return <LoadingView msg="Loading details ... " />;
  if (!sale || sale?.closed)
    return (
      <Wrapper style={{ placeContent: "center", height: "86vh" }}>
        <BigValue className="secondary--text">
          ⚠️ Item is no longer available!
        </BigValue>
      </Wrapper>
    );

  return (
    <Wrapper>
      <h1 className="h2">{sale?.item?.name}</h1>

      <CapsLabel>
        <span>Asset explorer:&nbsp;</span>

        <a
          href={`http://testnet.algoexplorer.io/asset/${sale?.item?.id}`}
          rel="noopener noreferrer"
          target="_blank"
        >{`#${sale?.item?.id}`}</a>
      </CapsLabel>

      <Display>
        <Figure>
          <SaleImage src={sale?.item?.url} />

          <FlexRow style={{ placeContent: "space-between" }}>
            <CapsLabel style={{ textAlign: "left" }}>
              <span>Seller:&nbsp;</span>
              <span className="secondary--text">
                {truncateAccountString(sale?.seller || "")}
              </span>
            </CapsLabel>

            <CapsLabel>
              Available: <b className="secondary--text">{sale?.qty}</b>
            </CapsLabel>
          </FlexRow>
        </Figure>

        {sale?.item && (
          <BuyNowControls
            sale={sale}
            qty={qty}
            onQtyChange={(i) => setQty(i)}
          />
        )}
      </Display>
    </Wrapper>
  );
}
