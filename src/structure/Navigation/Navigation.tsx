import { FC, HTMLAttributes } from "react";
import { useRouteNavigator } from "@vkontakte/vk-mini-app-router";
import { classNames } from "engine/utils";

import { Tabbar, TabbarItem } from "@vkontakte/vkui";

import { Icon28NewsfeedLinesOutline } from "@vkontakte/icons";
import { IconVmoji } from "engine/icons";

import "./Navigation.css";

interface INavigationProps extends HTMLAttributes<HTMLDivElement> {
  activeTab: string;
};

const Navigation: FC<INavigationProps> = ({
  activeTab,
  className,
  ...restProps
}) => {
  const routeNavigator = useRouteNavigator();

  const tabbarItemParams = (name: string, path: string) => ({
    selected: activeTab === name,
    "data-story": name,
    onClick: () => routeNavigator.push(path)
  });

  return (
    <Tabbar {...restProps} className={classNames("Navigation", className)}>
      <TabbarItem
        {...tabbarItemParams("home", "/")}
        text="Placeholder"
      >
        <Icon28NewsfeedLinesOutline />
      </TabbarItem>
      <TabbarItem
        {...tabbarItemParams("profile", "/profile")}
        text="Профиль"
      >
        <IconVmoji className="Icon" />
      </TabbarItem>
    </Tabbar>
  );
};

export default Navigation;
