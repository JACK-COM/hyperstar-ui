import styled from "styled-components";
import {
  CapsLabel,
  ExLink,
  GridContainer,
  Hero,
} from "components/Common/Containers";
import cream from "constants/cream.testnet.json";
import ImageLoader from "./Common/ImageLoader";
import creamlogo from "assets/cream-logo.png";

const Container = styled(Hero)`
  display: grid;
  place-content: center;
  min-height: 50vh;
`;
const PartnerLink = styled(ExLink)`
  overflow: hidden;
  padding: 2rem 0;

  ${ImageLoader} {
    border-radius: 8px;
  }
`;
const PartnersList = styled(GridContainer)`
  max-width: 100%;
`;

function Partners() {
  return (
    <Container>
      <h1>Partners</h1>
      <CapsLabel>
        Stars that make the <b>Network</b>
      </CapsLabel>

      <PartnersList>
        <PartnerLink title={cream.description} href={cream.website}>
          <figure>
            <ImageLoader src={creamlogo} width={200} />
            <figcaption>
              <h6>{cream.name}</h6>
            </figcaption>
          </figure>
        </PartnerLink>
      </PartnersList>
    </Container>
  );
}

export default Partners;
