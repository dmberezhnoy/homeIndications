export const menuItemStyle = (isOpenSideBar: boolean) => ({
  a: {
    "&.active .MuiListItem-root": {
      bgcolor: "settingsThemeColor.main_48",
    },
  },
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: 0.5,
  ".MuiListItem-root": {
    p: 0,
    width: isOpenSideBar ? "100%" : "fit-content",
    borderRadius: 2,
    color: "theme.palette.settingsThemeColor.main_100",
    "&:hover": { bgcolor: "settingsThemeColor.main_10" },
  },
  ".MuiListItemButton-root": {
    gap: isOpenSideBar ? 1 : 0,
    borderRadius: 3,
  },
  ".MuiListItemIcon-root": {
    height: "28px",
    minWidth: "28px",
    maxWidth: "28px",
  },
});
