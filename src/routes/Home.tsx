import { useEffect, useState } from "react";
import store from "state";
import LoadingView from "components/Common/LoadingView";
import styled from "styled-components";
import { CapsLabel, Hero, PageContainer } from "components/Common/Containers";
import org from "constants/organization.testnet.json";
import powerlines from "assets/power-lines-stars.jpeg";
import Partners from "components/Partners";

const Container = styled(PageContainer)`
  margin: 0 auto;
  max-width: 100%;
  padding: 0.6rem;
  place-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    padding-left: 0;
    padding-right: 0;
  }
`;
const HomeHero = styled(Hero)`
  display: grid;
  background-attachment: fixed;
  place-content: center;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    background-attachment: initial;
    min-height: 50vh;
  }
`;
const Main = styled(HomeHero)`
  background-image: ${() => `url(${powerlines})`};
  background-size: cover;
  background-position: center top;
  margin-top: 0;
  padding-top: 0;

  h1 {
    text-shadow: 0 2px 4px #023;
    text-transform: uppercase;

    &,
    + ${CapsLabel} {
      transform: scale(1.2);
    }
  }
`;

function Home() {
  const { address, initialized } = store.getState();
  const [state, setState] = useState<any>({ address, initialized });
  const onUpdate = (s: any) => setState((old: any) => ({ ...old, ...s }));

  useEffect(
    () => store.subscribeToKeys(onUpdate, ["address", "initialized"]),
    [address]
  );

  if (!state.initialized) return <LoadingView msg="Initializing App ..." />;

  return (
    <Container>
      <Main>
        <h1>{org.name}</h1>
        <CapsLabel>{org.description}</CapsLabel>

        <p>
          <b>Hyperstar Network</b> is a collaboration between unique projects
          across multiple blockchains.
        </p>
      </Main>

      <Partners />
    </Container>
  );
}

export default Home;
