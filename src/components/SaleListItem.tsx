import { createReachAPI } from "@jackcom/reachduck";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Label } from "components/Forms/Form";
import ImageLoader from "components/Common/ImageLoader";
import { BondCurveIcon } from "./Common/MIcon";
import CryptoIcon from "./Reach/CryptoIcon";
import { FlexRow } from "./Common/Containers";
import { MouseEventHandler, useState } from "react";
import { ReachToken } from "@jackcom/reachduck/lib/types";
import LoadingView from "./Common/LoadingView";

const ThumbWrapper = styled.div`
  flex-grow: 1;
  min-height: 100px;
  padding: ${({ theme }) => `${theme.sizes.xs} ${theme.sizes.xs} 0`};
  place-content: center;

  img {
    width: 100%;
  }
`;
const SaleLink = styled(Link)`
  background: ${({ theme }) => theme.colors.semitransparent};
  border-radius: ${({ theme }) => theme.presets.rounded.sm};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  ${ImageLoader} {
    max-height: 400px;
  }

  .material-icons {
    left: 0;
    position: absolute;
    top: 0;
  }
`;
const FlexLabel = styled(Label)`
  align-items: center;
  flex-direction: row;
  padding: 0 ${({ theme }) => theme.sizes.xs};
  place-content: space-between;

  &,
  > span {
    color: ${({ theme }) => theme.colors.accent};
  }

  .qty {
    font-weight: initial;
    color: #ffffff;
  }
`;

type SalePreviewProps = {
  item: ReachToken;
  useBondingCurve: boolean;
  altPrice?: number;
  altToken?: ReachToken;
  price?: number;
  qty: number;
};

// eslint-disable-next-line react/no-unused-prop-types
type SaleItemProps = { ctc?: any } & SalePreviewProps;

const SaleListItem = (props: SaleItemProps) => {
  const { connector } = createReachAPI();
  const {
    ctc: contract = 0,
    item,
    qty,
    useBondingCurve,
    price = 0,
    altPrice = 0,
    altToken
  } = props;
  const checkDisabled: MouseEventHandler<HTMLElement> = (e) => {
    if (contract === 0) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <SaleLink onClick={checkDisabled} to={`/buy/${contract}`}>
      <ThumbWrapper>
        <ImageLoader src={item?.url} />
      </ThumbWrapper>

      {useBondingCurve && <BondCurveIcon />}

      <FlexLabel>
        <span>{item?.name}</span>
        <span className="qty">{`x${qty}`}</span>
      </FlexLabel>

      <FlexLabel>
        <span>Price</span>
        {!["0", 0].includes(price) && (
          <FlexRow className="qty">
            <CryptoIcon symbol={connector} iconOnly />
            {` ${price}`}
          </FlexRow>
        )}

        {altPrice.toString() !== "0" && altToken?.symbol && (
          <FlexRow className="qty">
            <CryptoIcon symbol={altToken?.symbol} color />
            &nbsp;{altPrice}
          </FlexRow>
        )}
      </FlexLabel>
    </SaleLink>
  );
};

export default SaleListItem;

export const SaleItemPreview = (props: SaleItemProps) => {
  const { item, qty, useBondingCurve, price, altPrice, altToken } = props;
  const [listing] = useState<ReachToken>(item);
  const [altCurrency] = useState<ReachToken | undefined>(altToken);
  if (!listing) return <LoadingView msg="No item selected" />;

  return (
    <SaleListItem
      ctc={0}
      item={listing}
      qty={qty}
      useBondingCurve={useBondingCurve}
      price={price}
      altPrice={altPrice}
      altToken={altCurrency}
    />
  );
};
