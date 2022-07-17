import { useEffect, useState } from "react";
import styled from "styled-components";
import store, { checkHasToken } from "state";
import { FlexRow } from "./Common/Containers";
import { EnhancedCryptoIcon } from "./Reach/CryptoIcon";
import TokenAccept from "./TokenAccept";
import { noOp } from "utils";
import { ReachToken } from "@jackcom/reachduck";
import { tokenMetadata } from "reach";

const TokenViewWrapper = styled(FlexRow)`
  margin-bottom: 1rem;
  overflow: hidden;

  button {
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 0.6rem;
  }
`;
const ErrorMsg = styled(FlexRow)`
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
`;

type TVProps = { tokenId: string | number; onOptIn?: () => any };

export default function TokenView(props: TVProps) {
  const { account } = store.getState();
  const { tokenId, onOptIn = noOp } = props;
  const [fetching, setFetching] = useState(false);
  const [optIn, setOptIn] = useState(false);
  const [notFound, setError] = useState(false);
  const [token, setToken] = useState<ReachToken | null>(null);
  const [lastToken, setLast] = useState<any>();
  const cancelOptIn = () => setOptIn(false);
  const finishOptIn = (accepted = false) => {
    setOptIn(!accepted);
    onOptIn();
  };

  useEffect(() => {
    if (lastToken === tokenId) return;

    setLast(tokenId);
    setFetching(true);
    setError(false);

    const loadToken = async () => {
      try {
        const res = await tokenMetadata(tokenId, account);
        setToken(res);
        setOptIn(!(await checkHasToken(res?.id)));
      } catch (error) {
        setToken(null);
        setError(true);
      } finally {
        setFetching(false);
      }
    };

    loadToken();
  }, [tokenId]);

  if (fetching)
    return <span className="spinner--before">Fetching Token ...</span>;

  if (!token || notFound) return <ErrorMsg>❌ Token not found</ErrorMsg>;

  return (
    <TokenViewWrapper>
      <EnhancedCryptoIcon
        address={token.id}
        name={token.name}
        symbol={token.symbol}
        color
      />

      {optIn && (
        <TokenAccept
          tokenId={tokenId}
          onTokenAccept={finishOptIn}
          onCancelTokenAccept={cancelOptIn}
        />
      )}
    </TokenViewWrapper>
  );
}
