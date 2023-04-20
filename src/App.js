import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React, { Fragment, Suspense, lazy } from "react";
import { HashRouter, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import theme from "./theme";

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function App() {
  return (
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
            <Route>
              <LoggedOutComponent />
            </Route>
        </Suspense>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;
