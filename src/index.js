import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { darkTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
