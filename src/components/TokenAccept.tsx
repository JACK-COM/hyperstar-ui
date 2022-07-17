import { useState } from "react";
import store, { addNotification } from "state";
import DefaultButton, { TransparentButton } from "./Forms/Button";
import { Controls } from "./Forms/Form";
import styled from "styled-components";
import { inlineAssetOptIn } from "reach";

const Wrapper = styled(Controls)`
  ${DefaultButton} {
    flex-grow: 1;
    max-width: 120px;
  }
  ${TransparentButton} {
    flex-grow: 0;
    height: 2rem;
    width: 2rem;
  }
`;

const TokenAccept = styled((props: TokenAcceptProps) => {
  const { onCancelTokenAccept, onTokenAccept, tokenId } = props;
  const [loading, setLoading] = useState(false);

  const acceptAltToken = async () => {
    const { account } = store.getState();
    if (!account) return;
    setLoading(true);
    const alertId = addNotification(`⏳ Opting in ... `, true);
    const accepted = await inlineAssetOptIn(alertId, account, tokenId);
    setLoading(false);
    onTokenAccept(accepted);
  };

  return (
    <Wrapper>
      <DefaultButton disabled={loading} onClick={acceptAltToken}>
        <b>Opt-In?</b>
      </DefaultButton>

      {!loading && (
        <TransparentButton onClick={onCancelTokenAccept}>
          <span className="material-icons">close</span>
        </TransparentButton>
      )}
    </Wrapper>
  );
})``;

export default TokenAccept;

export type TokenViewProps = {
  tokenId: any;
  onTokenAccept(accepted: boolean): any;
  onCancelTokenAccept(): any;
};

type TokenAcceptProps = { tokenId: any } & TokenViewProps;
