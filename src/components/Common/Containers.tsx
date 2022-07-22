import styled from "styled-components";

/** General-purpose default container */
export const BaseContainer = styled.section``;

type FlexContainerProps = {
  inline?: boolean;
  padded?: boolean;
};

/** Flex-container for displaying items in a row */
export const FlexRow = styled(BaseContainer)<FlexContainerProps>`
  align-items: center;
  display: ${({ inline }) => (inline ? "inline-" : "")}flex;
  padding: ${({ padded, theme }) => (padded ? theme.sizes.sm : 0)};
`;

/** Flex-container for displaying items in a column */
export const FlexColumn = styled(FlexRow)`
  flex-direction: column;

  > * {
    width: 100%;
  }
`;

export const GridContainer = styled(BaseContainer)`
  align-items: center;
  display: grid;
  grid-gap: 0.6rem;
  place-content: space-between;
`;

export const Hero = styled.article`
  font-size: 0.8rem;
  line-height: 1rem;
  margin: ${({ theme }) => theme.sizes.lg} 0;
`;

export const Code = styled.code`
  font-family: monospace;
  padding: ${({ theme }) => theme.sizes.sm};
`;

export const PageContainer = styled(FlexColumn).attrs({ padded: true })`
  margin: 0 auto;
  min-height: 100vh;
  max-width: 600px;
  padding-bottom: 20vh;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Figure = styled.figure`
  padding: ${({ theme }) => theme.sizes.sm};
  margin: 0;

  img {
    height: auto;
    width: 100%;
  }
`;

export const BigValue = styled.div`
  font-family: "Outfit", sans-serif;
  font-size: ${({ theme }) => theme.sizes.lg};
  font-weight: bold;
`;

export const CapsLabel = styled.div`
  font-family: "Outfit", sans-serif;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const Highlight = styled.span`
  color: #85c001;
  flex-grow: 0;
  padding-right: ${({ theme }) => theme.sizes.sm};
`;

export const ExLink = styled.a.attrs({
  rel: "noopener noreferrer",
  target: "_blank"
})``;

export const ClickableStrong = styled.strong.attrs({
  className: "accent--text pulse",
  role: "button"
})`
  animation-duration: 0.3s;
  border: 1px solid #9998;
  border-radius: 8px;
  padding: 0 0.4rem;
  cursor: pointer;
`;
