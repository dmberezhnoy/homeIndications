import React from "react";
import { Outlet } from "react-router-dom";

import { Stack, Typography } from "@mui/material";
const AuthLayout = () => {
  return (
    <Stack>
      <Typography variant="h6">AUTH LAYOUT</Typography>
      <Outlet />
    </Stack>
  );
};

export default AuthLayout;
