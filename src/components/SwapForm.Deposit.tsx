import { RoundButton, WideButton } from "components/Forms/Button";
import { intlFormatCurrency } from "utils/index";
import { ExchangeView } from "reach/views/TokenExchangeView";
import {
  ComponentPropsWithRef,
  FormEventHandler,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { BigValue, Highlight } from "./Common/Containers";
import MIcon from "components/Common/MIcon";
import { Fieldset, Form, FormRow, Hint, Input, Legend } from "./Forms/Form";
import ClearFieldButton from "./ClearFieldButton";

type FundSwapProps = ComponentPropsWithRef<"form"> & {
  exchange: ExchangeView;
  onFundPool(val: any): any;
};
const ExValue = styled(BigValue)`
  align-items: center;
  display: flex;
  font-size: 1.6rem;
`;
const Warning = styled(Hint)`
  line-height: ${({ theme }) => theme.sizes.lg};
`;
const FormWrapper = styled(Form)`
  max-width: 480px;
`;
const ShortInput = styled(Input).attrs({ type: "number", min: 0 })`
  flex-grow: 1;
  margin-left: ${({ theme }) => theme.sizes.sm};
  max-width: 320px;
  width: 100%;
`;
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

const FundSwapForm = (props: FundSwapProps) => {
  const { exchange, onFundPool, ...rest } = props;
  const { largeUnit, smallUnit, conversion } = exchange;
  const [largeText] = useState(largeUnit.symbol);
  const [smallText] = useState<any>(smallUnit.symbol);
  const [large, setLarge] = useState(0);
  const [small, setSmall] = useState(0);

  const invalid = useMemo(() => {
    if (small > 0 && small % conversion > 0) {
      return `${smallText} must be a multiple of ${conversion}`;
    }
    return "";
  }, [large, small, smallText]);
  const canSubmit = useMemo(
    () => large && small && !invalid,
    [large, small, invalid, conversion]
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    submitForm();
  };

  const submitForm = () => {
    if (invalid || !canSubmit) return;
    if (onFundPool) onFundPool({ small, large });
  };

  return (
    <FormWrapper onSubmit={handleSubmit} {...rest}>
      <Fieldset>
        <Legend>
          <Highlight>Large</Highlight>Unit
        </Legend>
        <GridRow>
          <ExValue>
            <RoundButton disabled>
              <MIcon>account_balance</MIcon>
            </RoundButton>

            <span>{largeText}</span>

            <ShortInput
              placeholder={intlFormatCurrency(large || 100)}
              onChange={({ target }) => setLarge(Number(target.value))}
              value={large || ""}
            />
          </ExValue>

          <ClearFieldButton onClick={() => setLarge(0)} />
        </GridRow>

        <Hint>
          Enter how much <b className="secondary--text">{largeText}</b> you want
          to add&nbsp;
        </Hint>
      </Fieldset>

      <Fieldset>
        <Legend>
          <Highlight>Small</Highlight>Unit
        </Legend>
        <GridRow>
          <ExValue>
            <RoundButton disabled>
              <MIcon>account_balance</MIcon>
            </RoundButton>

            <span>{smallText}</span>

            <ShortInput
              placeholder={intlFormatCurrency((large || 100) * conversion)}
              onChange={({ target }) => setSmall(Number(target.value))}
              step={conversion}
              value={small || ""}
            />
          </ExValue>

          <ClearFieldButton onClick={() => setSmall(0)} />
        </GridRow>

        <Hint>
          Enter how much <b className="secondary--text">{smallText}</b> you want
          to add&nbsp;
        </Hint>
      </Fieldset>

      <Warning className="error--text">
        {invalid ? <b>{invalid}</b> : <span />}
      </Warning>

      <WideButton
        disabled={invalid.length > 0 || !canSubmit}
        onClick={() => submitForm()}
        type="button"
      >
        <b>🏦 Fund Pool</b>
      </WideButton>
    </FormWrapper>
  );
};

export default FundSwapForm;
