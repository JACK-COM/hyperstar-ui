import { noOp } from "@jackcom/reachduck";
import { useMemo, useRef } from "react";
import { StyledComponentPropsWithRef } from "styled-components";
import { RadioLabel, RadioInput } from "./Form";

type RadioProps = Pick<
  StyledComponentPropsWithRef<"input">,
  "checked" | "disabled" | "aria-disabled" | "children" | "name" 
> & {
  onChange(b: boolean): any;
};
export const Radio = (props: RadioProps) => {
  const { checked = false, disabled, name, onChange = noOp, children } = props;
  const input = useRef<HTMLInputElement>(null);
  const isChecked = useMemo(() => (checked ? "checked" : ""), [checked]);

  return (
    <RadioLabel className={isChecked}>
      <RadioInput
        ref={input}
        disabled={disabled}
        name={name}
        onChange={() => onChange(!checked)}
        checked={checked}
      />
      {children}
    </RadioLabel>
  );
};

export default Radio;
