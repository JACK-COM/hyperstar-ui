import styled from "styled-components";
import { ReachToken, formatCurrency } from "@jackcom/reachduck";
import { useEffect, useState } from "react";
import { intlFormatCurrency } from "utils/index";
import { CapsLabel, FlexRow, Highlight } from "components/Common/Containers";
import MIcon from "components/Common/MIcon";
import {
  RoundButton,
  WideButton,
  TransparentButton
} from "components/Forms/Button";
import {
  Fieldset,
  Form,
  FormRow,
  Hint,
  Input,
  Legend
} from "components/Forms/Form";
import store, { checkHasToken } from "state";
import TokenView from "./TokenView";

const GridRow = styled(FormRow)`
  grid-template-columns: 80% 20%;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    > * {
      width: 100%;
    }
  }
`;
const Selection = styled(FlexRow)`
  flex-grow: 1;
  padding: 0 ${({ theme }) => theme.sizes.sm};
`;
const Price = styled.h3`
  align-items: center;
  display: flex;
  font-weight: bold;
  width: 100%;
`;
const PriceControl = styled(RoundButton)`
  font-size: larger;
  height: 32px;
  line-height: 32px;
  vertical-align: middle;
  width: 32px;
`;
const SwapFormWrapper = styled(Form)`
  padding: ${({ theme }) => theme.sizes.md} 0;
  margin: 0;

  ${Fieldset} {
    margin: 0.5rem 0;
  }
`;

type SwapFormProps = {
  disabled?: boolean;
  largeUnit: ReachToken;
  smallUnit: ReachToken;
  conversion: number;
  convertToLarge(val: any): any;
  convertToSmall(val: any): any;
};
// eslint-disable-next-line no-shadow
enum INVALID {
  FALSE = "",
  MULTIPLE = "%name% amount should be multiple of %conversion%",
  SUBZERO = "%name% amount cannot be less than zero"
}

export default function SwapForm(props: SwapFormProps) {
  const { assets } = store.getState();
  const { largeUnit, smallUnit, conversion, disabled = false } = props;
  const [amt, setAmt] = useState(0);
  const [inputAmt, setInput] = useState(0);
  const [invalid, setInvalid] = useState(false);
  const [invalidMsg, setInvalidMsg] = useState("");
  const [tokA, setTokenA] = useState<ReachToken>(largeUnit);
  const [tokB, setTokenB] = useState<ReachToken>(smallUnit);
  const needsOptIn = (id: any) => assets.length && !checkHasToken(id);
  const [optInA, acceptA] = useState(needsOptIn(tokA?.id));
  const [optInB, acceptB] = useState(needsOptIn(tokB?.id));
  const [increment, setIncr] = useState(1);
  const incr = (e: any) => {
    e.preventDefault();
    const sum = amt + increment;
    const mod = tokA === smallUnit ? sum % conversion : sum % 1;
    onAmt(sum - mod);
  };
  const decr = (e: any) => {
    e.preventDefault();
    onAmt(Math.max(amt - increment, 0));
  };
  const convert = (userIn: number) =>
    increment === 1 ? userIn * conversion : userIn / conversion;
  const onAmt = (newAmt: number) => {
    if (isNaN(newAmt)) return;
    const newConv = convert(newAmt);
    const subzero = newConv < 0;
    const multiple =
      newConv % 1 > 0 || (tokB === smallUnit && newConv % conversion > 0);

    setAmt(newAmt);
    setInput(newConv);
    setInvalid(subzero || multiple);
    if (!multiple && !subzero) setInvalidMsg(INVALID.FALSE);
    else {
      if (subzero) setInvalidMsg(INVALID.SUBZERO);
      if (multiple) setInvalidMsg(INVALID.MULTIPLE);
    }
  };
  const selectToken = (tIndex: number) => {
    if (tIndex === 0) {
      setTokenA(largeUnit);
      setTokenB(smallUnit);
      setIncr(1);
    } else {
      setTokenA(smallUnit);
      setTokenB(largeUnit);
      setIncr(conversion);
    }

    onAmt(0);
  };
  const submitSwap = (e: any) => {
    e.preventDefault();
    if (inputAmt === 0) return;
    const { convertToLarge, convertToSmall } = props;
    if (tokB.id === largeUnit.id) convertToSmall(inputAmt);
    else convertToLarge(inputAmt);
  };

  useEffect(() => {
    setTokenA(largeUnit);
    setTokenB(smallUnit);
    return store.subscribeToKeys(
      async (u) => {
        if (!u.assets) return;
        acceptA(!(await checkHasToken(largeUnit.id)));
        acceptB(!(await checkHasToken(smallUnit.id)));
      },
      ["assets"]
    );
  }, [largeUnit, smallUnit, assets]);

  return (
    <SwapFormWrapper onSubmit={submitSwap}>
      <Fieldset>
        <Legend>
          I want to <Highlight>get</Highlight>
        </Legend>
        {optInA ? (
          <TokenView tokenId={tokA.id} onOptIn={() => acceptA(false)} />
        ) : (
          <GridRow>
            <Price>
              <PriceControl disabled={disabled} onClick={decr}>
                -
              </PriceControl>
              <Selection>
                <Input
                  style={{ maxWidth: "8rem", marginRight: "0.6rem" }}
                  disabled={disabled}
                  placeholder="1,000"
                  value={amt ? intlFormatCurrency(amt) : ""}
                  onChange={({ target }) =>
                    onAmt(Number(target.value.replaceAll(",", "")))
                  }
                />
                <span>{`${tokA?.symbol}`}</span>
              </Selection>
              <PriceControl disabled={disabled} onClick={incr}>
                +
              </PriceControl>
            </Price>

            <TransparentButton onClick={() => onAmt(0)} disabled={disabled}>
              <MIcon>close</MIcon>
              <CapsLabel>Clear</CapsLabel>
            </TransparentButton>
          </GridRow>
        )}

        <Hint>
          {invalidMsg === INVALID.FALSE ? (
            <>
              Enter how much&nbsp;
              <b className="secondary--text">{tokA?.symbol || "output"}</b>
              &nbsp;you want to receive&nbsp;
            </>
          ) : (
            <b className="error--text">
              {invalidMsg
                .valueOf()
                .replaceAll("%name%", tokA.symbol)
                .replaceAll(
                  "%conversion%",
                  (tokA === smallUnit ? conversion : 1).toString()
                )}
            </b>
          )}
        </Hint>
      </Fieldset>

      <TransparentButton
        size="lg"
        disabled={disabled}
        onClick={() => selectToken(Number(tokA?.id === largeUnit.id))}
      >
        <MIcon>swap_vert</MIcon>
      </TransparentButton>

      <Fieldset>
        <Legend>
          and will <Highlight>pay</Highlight>
        </Legend>
        {optInB ? (
          <TokenView tokenId={tokB.id} onOptIn={() => acceptB(false)} />
        ) : (
          <>
            <Price>
              <PriceControl disabled>
                <MIcon>currency_exchange</MIcon>
              </PriceControl>
              <Selection>
                <Highlight>{intlFormatCurrency(inputAmt)}</Highlight>
                <span>{`${tokB?.symbol}`}</span>
              </Selection>
            </Price>

            <Hint>
              Balance:&nbsp;
              <b>
                {formatCurrency(tokB?.amount, tokB?.decimals, true)}
                &nbsp;
                {tokB?.symbol}
              </b>
            </Hint>
          </>
        )}
      </Fieldset>

      <WideButton
        disabled={disabled || inputAmt === 0 || invalid}
        onClick={submitSwap}
      >
        <b>Convert Tokens</b>
      </WideButton>
    </SwapFormWrapper>
  );
}
