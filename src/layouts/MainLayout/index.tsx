import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Stack } from "@mui/material";

import { Navigation } from "components/common";

import { contentStyles, wrapperStyles } from "./styles";
const MainLayout = () => {
  return (
    <Stack sx={wrapperStyles}>
      <Navigation />
      <Box sx={contentStyles}>
        <Outlet />
      </Box>
    </Stack>
  );
};

export default MainLayout;
