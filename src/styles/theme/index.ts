import { createTheme } from "@mui/material";

import {
  getComponentsSettings,
  getTypographySettings,
} from "./sectionsSettings";

const commonTheme = createTheme({
  spacing: 8,
});

export const getTheme = () => {
  // ---- LIGHT THEME ----
  return createTheme(commonTheme, {
    typography: getTypographySettings(),
    components: getComponentsSettings(),
  });
};
