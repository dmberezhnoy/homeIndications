import { createTheme } from "@mui/material";

import { bluePalette, getLightPalette } from "./palettes";
import {
  getComponentsSettings,
  getTypographySettings,
} from "./sectionsSettings";

const commonTheme = createTheme({
  spacing: 8,
});

export const getTheme = () => {
  // ---- LIGHT THEME ----
  const currentPalette = createTheme(commonTheme, {
    palette: { settingsThemeColor: bluePalette },
  });
  return createTheme(currentPalette, {
    typography: getTypographySettings(false),
    components: getComponentsSettings(),
    palette: getLightPalette(currentPalette),
  });
};
