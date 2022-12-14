import React from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "consts";
import { AuthLayout, MainLayout } from "layouts";
import { MainPage, StartPage } from "pages";

const AppRoutes = () => {
  const appRoutes = useRoutes([
    {
      path: routes.ROOT,
      element: <StartPage />,
      children: [
        {
          path: routes.MAIN,
          element: <MainLayout />,
          children: [
            {
              path: routes.ROOT,
              element: <MainPage />,
            },
          ],
        },
        {
          path: routes.AUTH,
          element: <AuthLayout />,
          children: [
            {
              path: routes.ROOT,
              element: <div>LOGIN PASS</div>,
            },
          ],
        },
      ],
    },
  ]);

  return appRoutes;
};

export default AppRoutes;
