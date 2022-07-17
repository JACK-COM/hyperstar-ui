import { Hint } from "components/Forms/Form";
import styled from "styled-components";
import { addNotification } from "state";
import { copyToClipboard, truncateAccountString } from "utils";
import { CapsLabel, FlexColumn } from "components/Common/Containers";
import MIcon from "components/Common/MIcon";
import useGlobalUser from "hooks/globalUser";

/** Copy active user's address to clipboard */
const Container = styled(FlexColumn)`
  cursor: pointer;
  &:hover {
    .prompt {
      display: inline;
    }
  }

  .prompt {
    display: none;
  }
`;

type Props = { address?: string; userAddress?: boolean };

export const CopyUserAddress = styled((props: Props) => {
  const { address } = props;
  const { address: user } = useGlobalUser();
  const display = address || user;

  return (
    <Container role="button" onClick={() => copyAddress(display)}>
      <CapsLabel>
        <MIcon>content_copy</MIcon>
        <span>{truncateAccountString(display)}</span>
      </CapsLabel>
      <Hint className="prompt">Copy Address</Hint>
    </Container>
  );
})``;

export default CopyUserAddress;

/** Copy handler with UI notification on complete */
async function copyAddress(address: string) {
  await copyToClipboard(address);
  addNotification("✅ Copied address!");
}
