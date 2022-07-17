import { createAnnouncerAPI } from "reach/participants/Announcers";
import { EXCHANGE_ANNOUNCER } from "constants/announcers";
import { BigValue, CapsLabel, FlexColumn } from "components/Common/Containers";
import { WideButton } from "components/Forms/Button";
import { Hint } from "components/Forms/Form";
import store from "state";

type PublishSwapProps = {
  ctc: any;
  onContractPublished(): any;
  onDismiss(): any;
};
export default function PublishSwap(props: PublishSwapProps) {
  const { ctc, onContractPublished, onDismiss } = props;
  const { account } = store.getState();
  const onPublish = async () => {
    const texAnnouncer = createAnnouncerAPI(account, EXCHANGE_ANNOUNCER);
    await texAnnouncer.publish(ctc);
    onContractPublished();
  };

  return (
    <FlexColumn>
      <CapsLabel>Exchange Created! Your contract address is</CapsLabel>
      <BigValue>{ctc}</BigValue>
      <Hint>
        Allow others to find this pair, or save and share it yourself?{" "}
        <b className="secondary--text">
          Please save this value, as it may be lost when you clear your browser
          cache.
        </b>
      </Hint>
      <WideButton onClick={onPublish}>📣 Publish Contract?</WideButton>
      <WideButton onClick={onDismiss}>❌ Cancel</WideButton>
    </FlexColumn>
  );
}
