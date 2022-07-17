import styled from "styled-components";
import { FlexRow } from "./Containers";

const CenteredWrapper = styled(FlexRow)`
  position: fixed;
  place-content: center
  height: 100vh;
  width: 100vw;
`;

const FullScreenLoader = () => (
  <CenteredWrapper padded>
    <p>Loading route ...</p>
  </CenteredWrapper>
);

export default FullScreenLoader;
