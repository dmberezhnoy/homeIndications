import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";

import { Drawer } from "components/common";

import { INavItem, navList } from "./navList";
import { menuItemStyle } from "./styles";

const Navigation: React.FC = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(true);

  const handleToggleNavigation = () => setIsOpenNavigation((prev) => !prev);

  const renderListItem = (item: INavItem) => {
    return (
      <NavLink key={item.url} to={item.url}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {isOpenNavigation && <Typography>{item.label}</Typography>}
          </ListItemButton>
        </ListItem>
      </NavLink>
    );
  };

  return (
    <Drawer isOpen={isOpenNavigation}>
      <Stack height={1}>
        <List sx={menuItemStyle(isOpenNavigation)}>
          {navList.map(renderListItem)}
        </List>
        <IconButton
          onClick={handleToggleNavigation}
          sx={{ width: "fit-content" }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </Drawer>
  );
};

export default Navigation;
