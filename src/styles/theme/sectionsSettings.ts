import { TypographyOptions } from "@mui/material/styles/createTypography";

// TYPOGRAPHY
export const getTypographySettings = (): TypographyOptions => ({
  fontFamily: "Inter",
  button: {
    textTransform: "none",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
  },
  caption: {
    fontSize: 15,
    lineHeight: "24px",
    fontWeight: 400,
  },
  h3: {
    fontSize: 20,
    fontWeight: 700,
  },
  h5: {
    fontSize: 18,
    lineHeight: "28px",
    fontWeight: 600,
    color: "black",
  },
  body2: {
    fontSize: 15,
    lineHeight: "24px",
    fontWeight: 700,
  },
  h6: {
    fontSize: 16,
    fontWeight: 600,
    color: "black",
  },
  body1: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    color: "black",
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: "20px",
    color: "grey",
    fontWeight: 400,
  },
});

// SHAPE
export const shapeSettings = {
  borderRadius: 8,
};

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
  MuiPaper: {
    styleOverrides: {
      root: {
        "& .MuiAutocomplete-listbox": { padding: "4px" },
      },
    },
  },
});
