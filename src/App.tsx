import React from "react";

import { ThemeProvider } from "@mui/material";
import { Stack, Typography } from "@mui/material";

import { getTheme } from "./styles/theme";

function App() {
  const appTheme = getTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <Stack>
        <Typography variant="h1">Hello</Typography>
        <Typography variant="h2">Hello</Typography>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
