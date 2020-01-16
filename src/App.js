import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import "./App.css";
// import store from "./store";
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";
import { grey, teal } from "@material-ui/core/colors";

import { Home } from "./containers";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[300]
    },
    secondary: {
      main: teal[300]
    },
    background: {
      default: grey[200]
    }
  },
  "@global": {
    "html, body, #root": {
      width: "100%"
    }
  }
});

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </MuiThemeProvider>
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
