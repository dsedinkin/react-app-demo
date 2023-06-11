import { FC, HTMLAttributes } from "react";
import { useRouteNavigator } from "@vkontakte/vk-mini-app-router";
import { classNames } from "engine/utils";

import { PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

import "./FriendsHeader.css";

interface IFriendsHeaderProps extends HTMLAttributes<HTMLDivElement> { };

const FriendsHeader: FC<IFriendsHeaderProps> = ({
  className,
  ...restProps
}) => {
  const routeNavigator = useRouteNavigator();

  return (
    <div {...restProps} className={classNames("FriendsHeader", className)}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} label="Назад" />}>
        Друзья
      </PanelHeader>
    </div>
  );
};

export default FriendsHeader;
