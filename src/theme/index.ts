import createState from "@jackcom/raphsducks";
import { createGlobalStyle } from "styled-components";
import { UIThemeType } from "types/shared";
import DARK_THEME from "./theme.dark";
import LIGHT_THEME from "./theme.light";

const THEME_KEY = "app-theme";

/* Global Application Style Theme */
const THEME = {
  Dark: DARK_THEME,

  Light: LIGHT_THEME,

  GLOBAL: createGlobalStyle<any>`
  body {
    background-color: ${({ theme: t }) => t.colors.bgColor};
    /* background-image: ${({ theme: t }) => t.colors.bgGradient}; */
    color: ${({ theme: t }) => t.colors.primary};
    transition: background-color 0.4s ease-out;
  
    a,
    .App-link {
      color: ${({ theme: t }) => t.colors.accent};
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${({ theme: t }) => t.colors.secondary};
    }

    .accent { 
      background-color: ${({ theme: t }) => t.colors.accent}; 
    }
    .bgColor { 
      background-color: ${({ theme: t }) => t.colors.bgColor}; 
    }
    .error { 
      background-color: ${({ theme: t }) => t.colors.error}; 
    }
    .grey {
      background-color: #9c9c9c;
    }
    .primary { 
      background-color: ${({ theme: t }) => t.colors.primary}; 
    }
    .secondary { 
      background-color: ${({ theme: t }) => t.colors.secondary}; 
    }
    .warning { 
      background-color: ${({ theme: t }) => t.colors.warning}; 
    }
    .accent--text{ 
      color: ${({ theme: t }) => t.colors.accent}; 
    }
    .bgColor--text{ 
      color: ${({ theme: t }) => t.colors.bgColor}; 
    }
    .error--text{ 
      color: ${({ theme: t }) => t.colors.error}; 
    }
    .grey--text {
      color: #9c9c9c;
    }
    .primary--text{ 
      color: ${({ theme: t }) => t.colors.primary}; 
    }
    .secondary--text{ 
      color: ${({ theme: t }) => t.colors.secondary}; 
    }
    .warning--text{ 
      color: ${({ theme: t }) => t.colors.warning}; 
    }

  }
  `,
};

export const themeState = createState({ theme: "Dark" as UIThemeType });

/** Get current UI theme from local storage */
export function getTheme(): UIThemeType {
  return "Dark";
}

/** Set current UI theme */
export function toggleGlobalUITheme(old: UIThemeType): UIThemeType {
  const themes: UIThemeType[] = ["Dark", "Light"];
  return setGlobalUITheme(themes[Number(old === "Dark")]);
}

/** Set current UI theme */
export function setGlobalUITheme(newTheme: UIThemeType): UIThemeType {
  themeState.theme(newTheme);
  window.localStorage.setItem(THEME_KEY, newTheme);
  return newTheme;
}

export default THEME;
