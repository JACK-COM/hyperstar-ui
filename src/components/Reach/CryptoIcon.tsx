import styled from "styled-components";
import { cryptoImage, IconsMap } from "./cryptocurrency-icons";
import {
  FlexColumn,
  FlexRow,
  GridContainer,
} from "components/Common/Containers";
import { ComponentPropsWithRef } from "react";

interface CryptoIconProps {
  /**  @description Return a color image (default false) */
  color?: boolean;
  /**  @description Show name beside icon when false */
  iconOnly?: boolean;
  /**  @description Crypto abbreviation (e.g. ETH) */
  symbol: string;
  /**  @description Width and height of icon: default is `20px` */
  size?: number;
}

const AssetId = styled(FlexRow)`
  align-items: flex-start;
  flex-direction: column;
  font-size: 0.64rem;
  opacity: 0.66;
`;
const AssetSymbol = styled.span`
  @include heading-font();
  font-weight: bold;
`;
const AssetName = styled.span`
  display: block;
  font-weight: bold;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
`;
const AssetText = styled(FlexColumn)`
  align-items: start;
  overflow: hidden;
`;
const AssetWrapper = styled(GridContainer)`
  border-radius: ${({ theme }) => theme.presets.rounded.sm};
  flex-grow: 1;
  grid-template-columns: 24px calc(100% - 24px);
  gap: ${({ theme }) => theme.sizes.xs};
  padding: ${({ theme }) => theme.sizes.sm};

  img {
    height: auto !important;
    max-width: 24px;
    margin-right: ${({ theme }) => theme.sizes.xs};
  }
`;
const CryptoIcon = styled((props: CryptoIconProps) => {
  const { symbol, color, iconOnly, size = 20 } = props;
  const imgProps = { width: size, height: size };
  const data = IconsMap.get(symbol);
  const src = cryptoImage(symbol, color);
  const name = data?.name || symbol;

  // Show icon with or without text (per props)
  return iconOnly ? (
    <img {...imgProps} src={src} alt={name} />
  ) : (
    <AssetWrapper>
      <img {...imgProps} src={src} alt={name} />
      <AssetName>{symbol}</AssetName>
    </AssetWrapper>
  );
})``;

export default CryptoIcon;

type CCIProps = CryptoIconProps & { name?: string; address: string | number };

export const EnhancedCryptoIcon = styled((props: CCIProps) => {
  if (props.iconOnly) return <CryptoIcon {...props} />;

  const { symbol, color, size = 32, name, address } = props;
  const imgProps = { width: size, height: size };
  const src = cryptoImage(symbol, color);

  // Show icon with or without text (per props)
  return (
    <AssetWrapper>
      <img {...imgProps} src={src} alt={name} />

      <AssetText>
        <AssetName>{name}</AssetName>
        <AssetId>
          <AssetSymbol>{symbol}&nbsp;</AssetSymbol>
          <AlgoAssetLink
            assetId={address}
            title={`View ${symbol} in asset explorer`}
          >{`#${address}`}</AlgoAssetLink>
        </AssetId>
      </AssetText>
    </AssetWrapper>
  );
})`
  width: 100%;
`;

// const env = (e: string) => (e === "production" ? "" : "testnet.");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const env = (_: any) => "testnet.";
const algoex = `https://${env(process.env.NODE_ENV)}algoexplorer.io`;
export const AlgoAssetLink = styled((p: AssetLinkProps) => {
  const { assetId, children, ...rest } = p;
  return (
    <a
      href={`${algoex}/asset/${assetId}`}
      onClick={(e: any) => e.stopPropagation()}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
})`
  font-size: ${({ theme }) => theme.sizes.sm};
  line-height: ${({ theme }) => theme.sizes.md};
  margin: 0;
  padding: 0;
`;

type AssetLinkProps = {
  assetId: number | string;
} & ComponentPropsWithRef<"a">;
