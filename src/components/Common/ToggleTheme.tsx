import { RoundButton } from "components/Forms/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { toggleGlobalUITheme, themeState } from "theme/index";
import { UIThemeType } from "types/shared";
import { FlexRow } from "./Containers";
import MIcon from "./MIcon";

const HEIGHT = 24;
const HEIGHT_PX = `${HEIGHT}px`;
const Trigger = styled(RoundButton)`
  background-color: transparent;
  border-radius: ${HEIGHT_PX};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  transition: 0.1s ease-in;
  margin-left: 0;
  margin-right: 0;
  padding: ${({ theme }) => theme.sizes.xxs};
  height: ${HEIGHT_PX};
  width: ${HEIGHT_PX};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.semitransparent};
  }

  .material-icons,
  .material-icons-outlined {
    margin: 0;
  }
`;
const ToggleThemeContainer = styled.div`
  background-color: transparent;
  height: ${HEIGHT_PX};
  margin-left: ${({ theme }) => theme.sizes.sm};
  width: ${HEIGHT_PX};
`;
const icon = (t: string | UIThemeType) => {
  const modes = ["dark_mode", "light_mode"];
  return modes[Number(t === "Dark")];
};

export default function ToggleTheme() {
  const { theme: appTheme } = themeState.getState();
  const [theme, setState] = useState(icon(appTheme));

  useEffect(() =>
    themeState.subscribeToKeys(
      ({ theme: t }) => setState(icon(t as UIThemeType)),
      ["theme"]
    )
  );

  return (
    <ToggleThemeContainer>
      <Trigger onClick={() => toggleGlobalUITheme(appTheme)}>
        <MIcon outline>{theme}</MIcon>
      </Trigger>
    </ToggleThemeContainer>
  );
}

const ChangeThemeItem = styled(FlexRow)`
  width: 100%;

  .label {
    flex-grow: 1;
    text-align: left;
  }
`;
export const SettingsThemeItem = () => (
  <ChangeThemeItem>
    <MIcon>palette</MIcon>
    <span className="label">Toggle Theme</span>
    <ToggleTheme />
  </ChangeThemeItem>
);
