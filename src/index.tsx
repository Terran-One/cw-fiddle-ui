import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { light as lightTheme, dark as darkTheme } from "./configs/theme";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import SnackbarNotification from "./components/notification/SnackbarNotification";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
function Root() {
  //TODO: Fetch this from state manager.
  const theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarNotification />
      <App />
    </ThemeProvider>
  );
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
