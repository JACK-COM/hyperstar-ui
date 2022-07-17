import store from "state";
import styled from "styled-components";
import { ComponentPropsWithRef, useEffect, useState } from "react";

const AppsCountContainer = styled.span.attrs({ className: "apps-count" })<
  { count: number } & ComponentPropsWithRef<"span">
>`
  color: ${({ theme, count }) => {
    if (count >= 7) return theme.colors.error;
    return count >= 5 ? theme.colors.warning : "inherit";
  }};
`;

const AppsCount = styled(() => {
  const { appsCount: initial } = store.getState();
  const [appsCount, setCount] = useState<typeof initial>(initial);
  const onAppsCount = (s: any) => setCount(s.appsCount);
  useEffect(() => store.subscribeToKeys(onAppsCount, ["appsCount"]), [initial]);

  return (
    <AppsCountContainer count={appsCount.length} className="apps-count">
      {appsCount.description}
    </AppsCountContainer>
  );
})``;

export default AppsCount;
