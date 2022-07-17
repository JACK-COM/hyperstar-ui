import styled from "styled-components";
import { FlexRow } from "components/Common/Containers";
import {
  getBlockchain,
  getBlockchainNetwork,
  NETWORKS,
} from "@jackcom/reachduck";
import { useMemo } from "react";

const Container = styled(FlexRow)`
  background-color: #000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.semitransparent};
  color: ${({ theme }) => theme.colors.primary}99;
  font-size: x-small;
  height: 24px;
  padding: ${({ theme }) => theme.sizes.sm};
  place-content: center;
  z-index: 999;
  min-width: 100vw;
  width: auto;

  &:hover p {
    animation-play-state: paused;
  }

  p {
    animation: ticker infinite 30s linear;
    animation-play-state: running;
    overflow-x: visible;
    white-space: nowrap;
  }

  @keyframes ticker {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(-100vw);
    }
  }

  @media screen and (max-width: 767px) {
  }
`;

const EnvironmentWarn = () => {
  const [network, provider] = [getBlockchain(), getBlockchainNetwork()];
  const { name } = NETWORKS[network];
  const env = useMemo(
    () => (network === "ALGO" ? `${name} ${provider}` : name),
    [network, provider]
  );

  return (
    <Container>
      <p>
        <span>
          This application is running on <b className="error--text">{env}!</b>
        </span>{" "}
        {network === "ALGO" ? (
          <span>
            Please make sure your wallet is set to{" "}
            <b className="warning--text">{provider}</b> before proceeding.
          </span>
        ) : (
          <span>Please make sure the correct wallet is enabled.</span>
        )}
      </p>
    </Container>
  );
};

export default EnvironmentWarn;
