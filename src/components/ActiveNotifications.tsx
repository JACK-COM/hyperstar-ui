import { useEffect, useState } from "react";
import styled from "styled-components";
import store from "state";
import { FlexColumn } from "./Common/Containers";
import { AutoDismissNotification } from "./Common/Notifications";

const NotificationGroup = styled(FlexColumn)`
  max-width: 400px;
  overflow: hidden auto;
  pointer-events: none;
  position: fixed;
  right: 0.75rem;
  top: 4.2rem;
  width: calc(100% - 0.75rem);
  z-index: 9999;

  @media screen and (max-width: 600px) {
    bottom: 4.2rem;
  }
`;

const ActiveNotifications = styled(() => {
  const { notifications } = store.getState();
  const [msgs, setMsgs] = useState([...notifications]);
  const onNotification = (n: any) => {
    const newnotes = n.notifications.slice(-10);
    setMsgs(newnotes);
  };

  useEffect(() => store.subscribeToKeys(onNotification, ["notifications"]));

  if (!msgs.length) return <></>;

  return (
    <NotificationGroup>
      {msgs.map((m) => (
        <AutoDismissNotification notification={m} key={m.time} />
      ))}
    </NotificationGroup>
  );
})``;

export default ActiveNotifications;
