import { FC, HTMLAttributes } from "react";
import { useRouteNavigator } from "@vkontakte/vk-mini-app-router";
import { classNames } from "engine/utils";

import { Placeholder, Button } from "@vkontakte/vkui";

import { IconPlaceholder } from "engine/icons";

import "./HomeContent.css";

interface IHomeContentProps extends HTMLAttributes<HTMLDivElement> { };

const HomeContent: FC<IHomeContentProps> = ({
  className,
  ...restProps
}) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Placeholder
      {...restProps} 
      className={classNames("HomeContent", className)}
      icon={<IconPlaceholder />}
      header="Немного лирики"
      action={
        <Button
          onClick={() => routeNavigator.showModal("default")}
          size="m"
        >
          Нажми на меня
        </Button>
      }
      stretched
    >
      Прежде чем описание станет хорошим, его необходимо написать. <br />Не правда ли?
    </Placeholder>
  );
};

export default HomeContent;
