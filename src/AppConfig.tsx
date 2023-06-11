import { FC, HTMLAttributes } from "react";
import { RoutesConfig, createHashRouter, createRoot, createView, createPanel, createModal, RouterProvider } from "@vkontakte/vk-mini-app-router";

import { useGlobalValue } from "elum-state";
import { APPEARANCE, DEFAULT_EPIC, DEFAULT_VIEW_FIRST, DEFAULT_PANELS, DEFAULT_VIEW_SECOND } from "engine/state";

import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";

import App from "./App";

interface IAppConfig extends HTMLAttributes<HTMLDivElement> { };

const AppConfig: FC<IAppConfig> = () => {
  const appearance = useGlobalValue(APPEARANCE);

  const routes = RoutesConfig.create([
    createRoot(DEFAULT_EPIC, [
      createView(DEFAULT_VIEW_FIRST, [
        createPanel(DEFAULT_PANELS.DEFAULT_VIEW_FIRST, "/", [
          createModal("default", "/modal")
        ])
      ]),
      createView(DEFAULT_VIEW_SECOND, [
        createPanel(DEFAULT_PANELS.DEFAULT_VIEW_SECOND.PROFILE, "/profile"),
        createPanel(DEFAULT_PANELS.DEFAULT_VIEW_SECOND.FRIENDS, "/profile/friends")
      ]),
    ])
  ]);

  const router = createHashRouter(routes.getRoutes());

  return (
    <ConfigProvider appearance={appearance}>
      <AdaptivityProvider>
        <AppRoot>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default AppConfig;
