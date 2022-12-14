import { ISettingsThemeColor } from "types";
/* eslint-disable @typescript-eslint/no-empty-interface */

interface AppTheme {
  button: {
    borderColor?: string;
  };
}

interface AppThemePalette {
  settingsThemeColor: ISettingsThemeColor;
  borderColor: string;
}

export declare module "@mui/material/styles/createPalette" {
  interface Palette extends AppThemePalette {}
  interface PaletteOptions extends Partial<AppThemePalette> {}
}
