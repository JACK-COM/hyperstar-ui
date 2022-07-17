import styled from "styled-components";
import { formatNumberShort } from "@jackcom/reachduck";
import { useEffect, useState } from "react";
import store from "state";
import ExchangeStore, { getExchangeById } from "state/exchanges";
import { ExchangeView } from "reach/views/TokenExchangeView";
import {
  CapsLabel,
  FlexColumn,
  GridContainer,
  Highlight,
} from "components/Common/Containers";
import { Fieldset, FormRow, Legend } from "components/Forms/Form";
import Button from "components/Forms/Button";

type PoolDetailsProps = {
  poolId: string | number;
  closePool?: () => any;
  fundPool?: () => any;
};

const Grid = styled(GridContainer)`
  grid-template-columns: repeat(2, 1fr);
`;

function PoolDetails(props: PoolDetailsProps) {
  const { poolId, fundPool, closePool } = props;
  const { address } = store.getState();
  const [data, setData] = useState({ ...getExchangeById(poolId) });
  const onPools = (u: any) => {
    const { exchanges = [] }: { exchanges: ExchangeView[] } = u;
    const i = exchanges.findIndex((p) => p.ctcInfo === poolId);
    if (i === -1) return;
    setData((old) => ({ ...old, ...exchanges[i] }));
  };

  useEffect(() => ExchangeStore.subscribeToKeys(onPools, ["exchanges"]));

  if (!data) return <h1 className="h2">No data</h1>;

  return (
    <>
      <h1 className="h2">{`${data.largeUnit?.symbol}/${data.smallUnit?.symbol}`}</h1>

      <Grid>
        <FlexColumn>
          <CapsLabel>Pool Balance</CapsLabel>
          <div className="h4">
            <Highlight>{data.largeBal}</Highlight>
            <span>{data.largeUnit?.symbol}</span>
            <span>&nbsp;/&nbsp;</span>
            <Highlight>{data.smallBal}</Highlight>
            <span>{data.smallUnit?.symbol}</span>
          </div>
        </FlexColumn>

        <FlexColumn>
          <CapsLabel>Exchange Rate</CapsLabel>
          <div className="h4">
            <Highlight>1</Highlight>
            <span>{data.largeUnit?.symbol}</span>
            <span>&nbsp;=&nbsp;</span>
            <Highlight>{formatNumberShort(data.conversion || 0)}</Highlight>
            <span>{data.smallUnit?.symbol}</span>
          </div>
        </FlexColumn>
      </Grid>

      {data.admin === address && (
        <Fieldset>
          <Legend>🔐 Admin</Legend>

          <FormRow>
            <Button onClick={fundPool}>
              <b>🏦 Fund Pool</b>
            </Button>

            <Button onClick={closePool}>
              <b>❌ Close Pool</b>
            </Button>
          </FormRow>
        </Fieldset>
      )}
    </>
  );
}

export default PoolDetails;
