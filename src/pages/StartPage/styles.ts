import { Theme } from "@mui/material";
import { Widths } from "styles/variables";

export const wrapperStyles = (theme: Theme) => ({
  p: Widths.APP_PADDING,
  backgroundImage: theme.palette.background.default,
});
