import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import AppRoutes from "./AppRoutes";
import { getTheme } from "./styles/theme";

function App() {
  const appTheme = getTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
