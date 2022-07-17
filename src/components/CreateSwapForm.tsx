import { parseAddress, parseCurrency, ReachToken } from "@jackcom/reachduck";
import { WideButton } from "components/Forms/Button";
import {
  ComponentPropsWithRef,
  FormEventHandler,
  useMemo,
  useState
} from "react";
import styled from "styled-components";
import { MarketDeployerOpts, TokenID } from "types/shared";
import { BigValue, FlexColumn, GridContainer } from "./Common/Containers";
import Notification from "./Common/Notifications";
import { ToggleList, ToggleListItemHoverable } from "./Common/ToggleList";
import { Fieldset, Form, Hint, Input, Legend } from "./Forms/Form";

type CreateSwapProps = ComponentPropsWithRef<"form"> & {
  assets: ReachToken[];
  onCreate(val: MarketDeployerOpts): any;
};

const ClickableStrong = styled.strong.attrs({
  className: "accent--text pulse",
  role: "button"
})`
  animation-duration: 0.3s;
  border: 1px solid #9998;
  border-radius: 8px;
  padding: 0 0.4rem;
  cursor: pointer;
`;
const ExValue = styled(BigValue)`
  align-items: center;
  display: flex;
  font-size: 1.6rem;
`;
const FormWrapper = styled(Form)`
  max-width: 480px;
`;
const ShortInput = styled(Input).attrs({ type: "number", min: 1 })`
  max-width: 4rem;
`;
const FormGrid = styled(GridContainer)`
  align-items: flex-start;
  gap: 0.4rem;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 1rem;
`;
const SubmitButton = styled(WideButton)`
  align-content: center;
  flex-direction: column;
  place-content: center;
  text-align: center;
`;

const CreateSwapForm = (props: CreateSwapProps) => {
  const { assets = [], onCreate } = props;
  const [lgUnit, setLargeDenom] = useState<ReachToken>();
  const [smUnit, setSmallDenom] = useState<ReachToken>();
  const [exRate, setRate] = useState(0);
  const [canSubmit, allowSubmit] = useState(false);
  const [selectLarge, setSelectLarge] = useState(false);
  const [selectSmall, setSelectSmall] = useState(false);
  const lgText = useMemo(() => lgUnit?.symbol ?? "", [lgUnit]);
  const smText = useMemo(() => smUnit?.symbol ?? "", [smUnit]);
  const validExchRate = useMemo(
    () => !Number.isNaN(exRate) && exRate > 0,
    [exRate]
  );
  const sameTokens = useMemo(
    () =>
      lgUnit !== undefined && smUnit !== undefined && lgUnit.id === smUnit.id,
    [lgUnit, smUnit]
  );
  const poolName = useMemo(() => {
    if (!lgText || !smText) return "";
    return `${lgText} / ${smText}`;
  }, [lgText, smText]);
  const confirmText = useMemo(() => {
    if (!lgUnit || !smUnit) return "Select both tokens";
    if (sameTokens) return "Select two UNIQUE tokens";
    if (!validExchRate) return "Enter a valid exchange rate";
    return `Create ${poolName} pool`;
  }, [sameTokens, validExchRate, lgUnit, smUnit, poolName]);
  // same deps; why not zoidberg them together?
  const [warning, invalid] = useMemo(() => {
    const notValid = !lgUnit || !smUnit || sameTokens || !validExchRate;
    if (notValid) return ["", notValid];

    if (!canSubmit)
      return [
        `You are the only one who can fund this pool! ` +
          `If that sounds ok, clear this notification to finish up`,
        notValid
      ];

    return ["", false];
  }, [sameTokens, validExchRate, lgUnit, smUnit, canSubmit]);

  const setLarge = (val: string | number) => {
    const large = assets.find((a) => a.id === val);
    setLargeDenom(large);
    setSelectLarge(false);
  };
  const toggleLargeSelect = () => {
    const next = !selectLarge;
    setSelectLarge(next);
    if (next) setSelectSmall(false);
  };
  const toggleSmallSelect = () => {
    const next = !selectSmall;
    setSelectSmall(next);
    if (next) setSelectLarge(false);
  };
  const setSmall = (val: string | number) => {
    const small = assets.find((a) => a.id === val);
    setSmallDenom(small);
    setSelectSmall(false);
  };
  const preventDefault: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  const renderItem = (a: ReachToken, comp?: ReachToken) => {
    const className = comp?.id === a.id ? "selected" : undefined;
    return (
      <ToggleListItemHoverable className={className}>
        {`${a.name} (${a.symbol})`}
      </ToggleListItemHoverable>
    );
  };
  const submitForm = () => {
    if (invalid || !onCreate) return;
    allowSubmit(false);
    onCreate({
      smallUnit: smUnit?.id as TokenID,
      largeUnit: lgUnit?.id as TokenID,
      largeDecs: 10 ** (lgUnit?.decimals || -1),
      conversion: parseCurrency(exRate, smUnit?.decimals)
    });
  };

  return (
    <FormWrapper onSubmit={preventDefault}>
      <p>
        Allow users to swap between a pair of tokens at a&nbsp;
        <strong className="accent--text">fixed rate</strong>. The rate and total
        value remains constant, unless you (the pool creator) add or withdraw
        funds.
      </p>

      <hr />

      <FormGrid>
        <Fieldset>
          <Legend>Token A</Legend>
          <FlexColumn>
            <ExValue>
              <strong className="secondary--text">1&nbsp;</strong>
              <ClickableStrong onClick={toggleLargeSelect}>
                {lgText || "???"}
              </ClickableStrong>
              {selectLarge && (
                <ToggleList
                  fixedHeight
                  data={assets}
                  itemText={(d: ReachToken) => renderItem(d, lgUnit)}
                  onItemClick={(d) => setLarge(parseAddress(d.id))}
                />
              )}
              <strong className="secondary--text">&nbsp;=&nbsp;</strong>
            </ExValue>

            <Hint>
              The <strong className="accent--text">dollars</strong>
              &nbsp;in&nbsp;
              <strong className="accent--text">dollars</strong>
              <strong className="secondary--text">&nbsp;to cents</strong>
            </Hint>
          </FlexColumn>
        </Fieldset>

        <Fieldset>
          <Legend>Token B</Legend>
          <FlexColumn>
            <ExValue>
              &nbsp;
              <ShortInput
                onChange={({ target }) => setRate(Number(target.value))}
                value={exRate || ""}
              />
              <ClickableStrong onClick={toggleSmallSelect}>
                &nbsp;{smText || "???"}
              </ClickableStrong>
              {selectSmall && (
                <ToggleList
                  fixedHeight
                  data={assets}
                  itemText={(d: ReachToken) => renderItem(d, smUnit)}
                  onItemClick={(d: ReachToken) => setSmall(d.id)}
                />
              )}
            </ExValue>

            <Hint>
              The <strong className="accent--text">cents</strong>
              &nbsp;in&nbsp;
              <strong className="secondary--text">dollars to</strong>
              <strong className="accent--text">&nbsp;cents</strong>
            </Hint>
          </FlexColumn>
        </Fieldset>
      </FormGrid>

      {warning && (
        <Notification
          onClear={() => allowSubmit(true)}
          notification={warning}
          error={invalid}
        />
      )}

      <SubmitButton
        type="button"
        onClick={submitForm}
        disabled={!(canSubmit && !invalid)}
      >
        <strong>{confirmText}</strong>
        {!invalid && (
          <Hint>
            <b>1 {lgText}</b> = <b>{`${exRate} ${smText}`}</b>
          </Hint>
        )}
      </SubmitButton>
    </FormWrapper>
  );
};

export default CreateSwapForm;
