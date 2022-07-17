import { RoundButton } from "components/Forms/Button";
import styled from "styled-components";
import { FlexColumn, FlexRow } from "./Containers";

const ModalWrapper = styled(FlexColumn)`
  height: 100vh;
  left: 0;
  place-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;

  &::before {
    background: #00000099;
    content: "";
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 0;
  }
`;
const ModalHeading = styled(FlexRow)`
  background: ${({ theme }) => theme.colors.bgColor};
  position: sticky;
  top: 0;
  z-index: 999;

  ${RoundButton} {
    background-color: transparent;

    .material-icons {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;
const ModalTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  flex-grow: 1;
  margin-right: -1rem;
  pointer-events: none;
`;
const ModalContainer = styled(FlexColumn).attrs({ padded: true })`
  -ms-overflow-style: none;
  scrollbar-width: none;
  background: ${({ theme }) => theme.colors.bgColor};
  border-radius: ${({ theme }) => theme.presets.rounded.sm};
  box-shadow: ${({ theme }) => theme.presets.elevated.md(theme)};
  color: ${({ theme }) => theme.colors.primary};
  height: 600px;
  overflow: hidden auto;
  max-width: 800px;
  width: 90vmin;

  &::-webkit-scrollbar {
    display: none;
  }

  ${RoundButton} {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    height: 82vh;
    width: 82vw;
  }

  @media screen and (max-width: 599px) {
    height: 80vh;
    width: 100vw;
  }
`;
const ModalContents = styled(FlexColumn)`
  flex-grow: 1;
  place-content: center;
`;

type ModalProps = {
  title?: string;
  onClose(): void;
} & React.ComponentPropsWithRef<"div">;

const Modal = (p: ModalProps) => {
  const { title, onClose, children } = p;

  return (
    <ModalWrapper>
      <ModalContainer className="scale-in">
        <ModalHeading>
          {title && <ModalTitle className="h4">{title}</ModalTitle>}
          <RoundButton onClick={onClose}>
            <span className="material-icons">close</span>
          </RoundButton>
        </ModalHeading>

        <ModalContents>{children}</ModalContents>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
