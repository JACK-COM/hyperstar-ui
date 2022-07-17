import styled from "styled-components";
import { TransparentButton } from "components/Forms/Button";
import { CapsLabel } from "./Common/Containers";
import MIcon from "components/Common/MIcon";
import AllButtonProps from "./Forms/Button.Helpers";

const ClearFieldButton = styled((props: AllButtonProps) => {
  const { onClick, type = 'button', ...rest } = props;
  const clicked = (e: any) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <TransparentButton onClick={clicked} type={type} {...rest}>
      <MIcon>close</MIcon>
      <CapsLabel>Clear</CapsLabel>
    </TransparentButton>
  );
})``;

export default ClearFieldButton;
