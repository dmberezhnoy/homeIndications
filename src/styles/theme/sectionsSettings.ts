import { TypographyOptions } from "@mui/material/styles/createTypography";

import { ColorKeys } from "../variables";

// TYPOGRAPHY
export const getTypographySettings = (isDark: boolean): TypographyOptions => ({
  fontFamily: "Inter",
  button: {
    textTransform: "none",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
  },
  caption: {
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: 400,
  },
  h5: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: 600,
    color: isDark ? ColorKeys.DARK_NEUTRALS_900 : ColorKeys.LIGHT_NEUTRALS_900,
  },
  h6: {
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: 600,
    color: isDark ? ColorKeys.DARK_NEUTRALS_900 : ColorKeys.LIGHT_NEUTRALS_900,
  },
  body1: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: isDark ? ColorKeys.DARK_NEUTRALS_900 : ColorKeys.LIGHT_NEUTRALS_900,
  },
  body2: {
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: 700,
  },
  subtitle2: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    color: isDark ? ColorKeys.DARK_NEUTRALS_600 : ColorKeys.LIGHT_NEUTRALS_600,
  },
});

// COMPONENTS SETTINGS
export const getComponentsSettings = () => ({
  MuiTypography: {
    styleOverrides: {
      root: { fontFamily: "Inter" },
    },
    defaultProps: {
      variantMapping: {
        subtitle2: "p",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        transform: "initial",
        position: "static",
        fontSize: "14px",
      },
    },
  },
  MuiFormControl: {
    defaultProps: { fullWidth: true },
  },
});
