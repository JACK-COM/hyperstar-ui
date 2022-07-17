import { useEffect, useState, ComponentPropsWithRef, useMemo } from "react";
import { Alert, removeNotification } from "state";
import styled from "styled-components";
import { noOp } from "utils";
import { GridContainer } from "./Containers";
import MIcon from "./MIcon";

const ClearButton = styled.button`
  align-self: stretch;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  place-content: center;
`;
const Container = styled(GridContainer)`
  align-items: center;
  animation: slide-in-from-right 0.3s ease-out;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.presets.rounded.sm};
  border: 1px solid ${({ theme }) => theme.colors.semitransparent};
  color: ${({ theme }) => theme.colors.bgColor};
  gap: 4px;
  grid-template-columns: 36px calc(100% - 40px);
  margin-bottom: ${({ theme }) => theme.sizes.xs};
  min-height: 72px;
  padding: ${({ theme }) => theme.sizes.xs};
  place-content: center;
  pointer-events: all;
  width: 100%;
`;

const Notification = styled((props: NotificationProps) => {
  const { error, notification, onClear = noOp, loading } = props;
  const [className, $errorLabel] = useMemo(() => {
    if (error)
      return [
        "error--text",
        <b key={1} className="label">
          Error:&nbsp;
        </b>
      ];
    if (loading) return ["spinner--after", undefined];
    return [undefined, undefined];
  }, [error, loading]);

  return (
    <Container className={props.className}>
      <ClearButton onClick={onClear}>
        <MIcon>close</MIcon>
      </ClearButton>
      <span className={className}>
        {$errorLabel}
        <span>{notification}</span>
      </span>
    </Container>
  );
})``;

export default Notification;

export const AutoDismissNotification = styled((props: ADNProps) => {
  const { timeout = 5000, className, notification } = props;
  const baseClass = className || "";
  const [state, setState] = useState<ADNState>({
    timeout: null,
    class: `${baseClass} slide-in-right`
  });
  const clear = () => {
    if (state.timeout) clearTimeout(state.timeout as NodeJS.Timeout);
    removeNotification(props.notification as Alert);
  };
  const animate = () => {
    clearTimeout(state.timeout as NodeJS.Timeout);
    setState({ class: `${baseClass} slide-out-left` });
    setTimeout(clear, 500);
  };

  useEffect(() => {
    if (notification.error || notification.persistent || state.timeout !== null)
      return;
    setState({ timeout: setTimeout(animate, timeout) });
  }, []);

  return (
    <Notification
      onClear={clear}
      className={state.class}
      notification={notification.msg}
      persistent={notification.persistent}
      loading={notification.loading}
      error={notification.error}
    />
  );
})``;

type ADNState = { timeout: NodeJS.Timeout | null; class: string } & any;
type ADNProps = NotificationBaseProps & {
  notification: Alert;
  timeout?: number;
};
type NotificationBaseProps = {
  error?: boolean;
  loading?: boolean;
  notification?: string | null | Alert;
  persistent?: boolean;
} & ComponentPropsWithRef<"div" | "section" | "button">;
type NotificationHandlers = { onClear(): void };
type NotificationProps = NotificationBaseProps & NotificationHandlers;
