import { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import THEME, { getTheme, themeState } from "theme/index";
import routes from "routes/index";
import FullScreenLoader from "components/Common/FullscreenLoader";
import AppHeader from "AppHeader";
import "./App.scss";
import { UIThemeType } from "types/shared";
import ActiveNotifications from "components/ActiveNotifications";
import WalletNotFound from "components/Reach/WalletNotFound";
import { startApplication } from "ADI";
import AppNav from "AppNav";
import EnvironmentWarn from "EnvironmentWarn";
import useGlobalUser from "hooks/globalUser";

const AppContainer = styled.section.attrs({ className: "App" })`
  @media screen and (max-width: 767px) {
    .menu-items {
      display: none;
    }
  }
`;

function App() {
  const sTheme = getTheme();
  const { address, initialized } = useGlobalUser();
  const [theme, setTheme] = useState(THEME[sTheme] || {});

  useEffect((): any => {
    if (!initialized) startApplication();
    const onTheme = (s: any) => setTheme(THEME[s.theme as UIThemeType]);
    const unsubTheme = themeState.subscribeToKeys(onTheme, ["theme"]);
    return unsubTheme;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <THEME.GLOBAL />

      <EnvironmentWarn />

      <ActiveNotifications />

      <Router>
        <AppContainer>
          {/* App Header */}
          <AppHeader />

          {/* Routes */}
          <Suspense fallback={<FullScreenLoader />}>
            <Switch>
              {routes.map(({ path, component, render, publicRoute }) =>
                publicRoute || address ? (
                  <Route
                    exact
                    path={path}
                    component={component}
                    key={path}
                    render={render}
                  />
                ) : (
                  <WalletNotFound key={path} />
                )
              )}
            </Switch>
          </Suspense>

          <AppNav />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
