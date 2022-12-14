import React from "react";

import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CountertopsIcon from "@mui/icons-material/Countertops";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

import { routes } from "../../../consts";

export interface INavItem {
  url: string;
  label: string;
  icon: React.ReactNode;
}

export const navList: INavItem[] = [
  {
    url: routes.MAIN,
    label: "Главная",
    icon: <HomeIcon />,
  },
  {
    url: routes.PROFILE,
    label: "Профиль",
    icon: <PersonIcon />,
  },
  {
    url: routes.INDICATIONS,
    label: "Показания",
    icon: <CountertopsIcon />,
  },
  {
    url: routes.STATISTIC,
    label: "Статистика",
    icon: <AutoGraphIcon />,
  },
  {
    url: routes.REPORTS,
    label: "Отчеты",
    icon: <TextSnippetIcon />,
  },
  {
    url: routes.SETTINGS,
    label: "Настройки",
    icon: <SettingsSuggestIcon />,
  },
];
