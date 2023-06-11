import { FC, HTMLAttributes } from "react";
import { classNames } from "engine/utils";

import { Panel } from "@vkontakte/vkui";
import { FriendsHeader as Header, FriendsContent as Content } from "engine/fragments";

import "./Friends.css";

interface IFriendsProps extends HTMLAttributes<HTMLDivElement> {
  nav: string;
};

const Friends: FC<IFriendsProps> = ({
  nav,
  className,
  ...restProps
}) => {
  return (
    <Panel
      {...restProps}
      className={classNames("Panel", className)}
      id={nav}
      nav={nav}
    >
      <Header />
      <Content />
    </Panel>
  );
};

export default Friends;
