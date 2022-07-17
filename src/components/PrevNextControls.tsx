import { GridContainer } from "./Common/Containers";
import { WideButton } from "./Forms/Button";
import styled from "styled-components";
import MIcon from "./Common/MIcon";

type ControlProps = {
  next?: () => void | null;
  prev?: () => void | null;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
};

const Container = styled(GridContainer)`
  gap: 0.4rem;

  &.pair {
    grid-template-columns: repeat(2, minmax(calc(50% - 0.4rem), 1fr));
  }

  &.single {
    grid-template-columns: 100%;
  }
`;

const PrevNextControls = styled((props: ControlProps) => {
  const { next, prev, nextDisabled, prevDisabled } = props;
  const className = !next || !prev ? "single" : "pair";

  return (
    <Container className={className}>
      {prev && (
        <WideButton disabled={prevDisabled} onClick={prev} size="lg">
          Back <MIcon>arrow_left</MIcon>
        </WideButton>
      )}

      {next && (
        <WideButton disabled={nextDisabled} onClick={next} size="lg">
          Next <MIcon>arrow_right</MIcon>
        </WideButton>
      )}
    </Container>
  );
})``;

export default PrevNextControls;
