import styled from "styled-components";
import { FlexColumn } from "./Containers";

const Container = styled(FlexColumn)`
  height: 80vh;

  &,
  .spinner--before {
    place-content: center;
    width: 100%;
  }
`;

type LoadingViewProps = { msg: string };

export default function LoadingView(props: LoadingViewProps) {
  const { msg = "Loading ..." } = props;

  return (
    <Container>
      <span className="spinner--before">{msg}</span>
    </Container>
  );
}
