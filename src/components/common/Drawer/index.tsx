import React from "react";

import { Stack } from "@mui/material";

import { getStyles } from "./styles";

interface ISideBarProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Drawer: React.FC<ISideBarProps> = ({ children, isOpen }) => {
  return <Stack sx={(theme) => getStyles(theme, isOpen)}>{children}</Stack>;
};

export default React.memo(Drawer);
