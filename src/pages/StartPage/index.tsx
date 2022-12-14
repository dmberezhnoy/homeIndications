import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { wrapperStyles } from "./styles";

const StartPage = () => {
  return (
    <Box sx={(theme) => wrapperStyles(theme)}>
      <Outlet />
    </Box>
  );
};

export default StartPage;
