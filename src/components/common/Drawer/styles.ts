import { CSSObject, Theme } from "@mui/material";
import { Widths } from "styles/variables";

export const openedMixin = (theme: Theme): CSSObject => ({
  width: Widths.SIDEBAR_OPEN,
  transition: theme.transitions.create(["width", "opacity"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme: Theme): CSSObject => ({
  width: Widths.SIDEBAR_CLOSED,
  transition: theme.transitions.create(["width", "opacity"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

export const getStyles = (theme: Theme, isOpen: boolean): CSSObject => ({
  whiteSpace: "nowrap",
  overflowY: "auto",
  height: `100%`,
  ...(isOpen && {
    ...openedMixin(theme),
  }),
  ...(!isOpen && {
    ...closedMixin(theme),
  }),
});
