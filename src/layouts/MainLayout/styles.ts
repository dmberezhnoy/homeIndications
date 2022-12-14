import { SxProps } from "@mui/material";
import { Widths } from "styles/variables";

export const wrapperStyles: SxProps = {
  p: 1,
  gap: 2,
  flexDirection: "row",
  border: 1,
  borderRadius: 3,
  borderColor: "transparent",
  backgroundColor: "rgba(255, 255, 255, 0.2)",

  backdropFilter: "blur(20px)",
  height: `calc(100vh - ${Widths.APP_PADDING} - ${Widths.APP_PADDING})`,
};

export const contentStyles: SxProps = {
  overflowY: "auto",
  flexGrow: 1,
};
