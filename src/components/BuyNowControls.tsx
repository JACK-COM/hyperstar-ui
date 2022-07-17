import { useHistory, useParams } from "react-router";
import store from "state";
import {
  BigValue,
  CapsLabel,
  GridContainer,
} from "components/Common/Containers";
import styled from "styled-components";
import { WideButton } from "components/Forms/Button";
import CryptoIcon from "components/Reach/CryptoIcon";
import { createBuyerAPI } from "reach/api/MarketBuyer";
import { Controls, Hint, Input, Label } from "components/Forms/Form";
import { BondCurveIcon } from "components/Common/MIcon";
import { createReachAPI } from "@jackcom/reachduck";
import { intlFormatCurrency } from "utils";
import { Sale } from "reach/views/MarketView";
import { Fragment } from "react";

const GridLabel = styled(GridContainer)`
  color: ${({ theme }) => theme.colors.accent};
  font-size: smaller;
  grid-template-columns: auto auto;
  grid-gap: ${({ theme }) => theme.sizes.xs};
  margin: ${({ theme }) => theme.sizes.xs} 0;
  text-align: left;
`;
const BuyButton = styled(WideButton)`
  background-color: #fff;
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
  font-size: 1.5rem;
  height: 3.4rem !important;
  margin-bottom: ${({ theme }) => theme.sizes.sm};
  width: 100%;

  &:hover {
    color: #fff;
  }
`;
const ControlGroup = styled(Controls)`
  flex-direction: column;
  flex-grow: 1;
  place-content: start;

  > * {
    flex-grow: 0;
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

type BuyNowProps = {
  sale: Partial<Sale>;
  qty: number;
  onQtyChange(n: number): any;
};
export default function BuyNowControls(props: BuyNowProps) {
  const history = useHistory();
  const reach = createReachAPI();
  const { assetId } = useParams<{ assetId: any }>();
  const { account, address } = store.getState();
  const { sale, qty, onQtyChange } = props;
  const saleQty = sale.qty || 0;
  const { altToken, altPrice = 0, price = 0 } = sale;
  const isSeller = (sale || {}).seller === address;
  const api = createBuyerAPI(account, assetId);
  const closeSale = async () => {
    await api?.closeSale();
    setTimeout(() => history.push("/buy"), 3500);
  };

  const options = [
    {
      symbol: reach.connector,
      price: intlFormatCurrency(price * (qty || 1)),
      action: () => api?.buy(qty),
    },
    {
      symbol: altToken?.symbol,
      price: intlFormatCurrency(altPrice * (qty || 1)),
      action: () => api?.altBuy(qty),
    },
  ].filter((opt) => opt.price !== "0");

  if (isSeller)
    return (
      <ControlGroup>
        <WideButton onClick={closeSale}>
          <b>Close Sale</b>
        </WideButton>

        {sale?.useBondingCurve && (
          <GridLabel>
            <BondCurveIcon />

            <p>
              This item will increase in price as the available inventory
              decreases.
            </p>
          </GridLabel>
        )}
      </ControlGroup>
    );

  return (
    <ControlGroup>
      <Label>
        <BigValue>Buy now&nbsp;</BigValue>

        {saleQty > 1 && (
          <>
            <CapsLabel className="secondary--text">(Enter qty)</CapsLabel>
            <Input
              type="number"
              placeholder="10"
              min={1}
              max={saleQty}
              value={Number(qty)}
              onClick={({ target }) => (target as any).select()}
              onChange={({ target }) => onQtyChange(Number(target.value))}
            />
          </>
        )}

        {qty > saleQty ? (
          <span>
            <b className="error--text">There&apos;s only {saleQty} left!</b>
          </span>
        ) : (
          <Hint>
            Purchase with <b>either</b>{" "}
            <b className="secondary--text">{reach.connector}</b> or{" "}
            <b className="secondary--text">{sale?.altToken?.symbol}</b>
          </Hint>
        )}
      </Label>

      {options.map((o, i) => (
        <Fragment key={i}>
          <BuyButton disabled={qty === 0 || qty > saleQty} onClick={o.action}>
            <b>{o.price}&nbsp;</b>
            <span className="grey--text">{o.symbol}&nbsp;</span>
            <CryptoIcon symbol={o.symbol || ""} color={qty > 0} iconOnly />
          </BuyButton>
          {options.length > 1 && i < options.length - 1 && (
            <span className="h5">OR</span>
          )}
        </Fragment>
      ))}
      {sale?.useBondingCurve && (
        <GridLabel>
          <BondCurveIcon />

          <p>
            This item will increase in price as the available inventory
            decreases.
          </p>
        </GridLabel>
      )}
    </ControlGroup>
  );
}
