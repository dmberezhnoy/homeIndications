import { PaletteOptions, Theme } from "@mui/material";

import { ISettingsThemeColor } from "types";

import { Colors } from "../variables";

export const bluePalette: ISettingsThemeColor = {
  main_10: Colors.BLUE_10,
  main_24: Colors.BLUE_24,
  main_48: Colors.BLUE_48,
  main_64: Colors.BLUE_64,
  main_80: Colors.BLUE_80,
  main_100: Colors.BLUE_100,
  main_200: Colors.BLUE_200,
  lightBgColor: Colors.BLUE_LIGHT_BG,
  darkBgColor: Colors.BLUE_DARK_BG,
};

export const cianPalette: ISettingsThemeColor = {
  main_10: Colors.CIAN_10,
  main_24: Colors.CIAN_24,
  main_48: Colors.CIAN_48,
  main_64: Colors.CIAN_64,
  main_80: Colors.CIAN_80,
  main_100: Colors.CIAN_100,
  main_200: Colors.CIAN_200,
};

export const orangePalette: ISettingsThemeColor = {
  main_10: Colors.ORANGE_10,
  main_24: Colors.ORANGE_24,
  main_48: Colors.ORANGE_48,
  main_64: Colors.ORANGE_64,
  main_80: Colors.ORANGE_80,
  main_100: Colors.ORANGE_100,
  main_200: Colors.ORANGE_200,
};

export const violetPalette: ISettingsThemeColor = {
  main_10: Colors.VIOLET_10,
  main_24: Colors.VIOLET_24,
  main_48: Colors.VIOLET_48,
  main_64: Colors.VIOLET_64,
  main_80: Colors.VIOLET_80,
  main_100: Colors.VIOLET_100,
  main_200: Colors.VIOLET_200,
};

// DARK PALETTE
export const getDarkPalette = (currentPalette: Theme): PaletteOptions => ({
  mode: "dark",
  background: {
    default: currentPalette.palette.settingsThemeColor.darkBgColor,
    paper: Colors.DARK_PAPER_BACKGROUND,
  },
  text: {
    primary: Colors.LIGHT_TEXT_COLOR,
    secondary: Colors.DARK_NEUTRALS_600,
  },
  borderColor: Colors.DARK_NEUTRALS_400,
});

// LIGHT PALETTE
export const getLightPalette = (currentPalette: Theme): PaletteOptions => ({
  mode: "light",
  background: {
    default: currentPalette.palette.settingsThemeColor.lightBgColor,
    paper: Colors.LIGHT_PAPER_BACKGROUND,
  },
  text: {
    primary: Colors.DARK_TEXT_COLOR,
    secondary: Colors.LIGHT_NEUTRALS_600,
  },
  borderColor: Colors.LIGHT_NEUTRALS_300,
});
