import { FC, HTMLAttributes } from "react";
import { classNames } from "engine/utils";

import { Panel } from "@vkontakte/vkui";
import { HomeHeader as Header, HomeContent as Content } from "engine/fragments";

import "./Home.css";

interface IHomeProps extends HTMLAttributes<HTMLDivElement> {
  nav: string;
};

const Home: FC<IHomeProps> = ({
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

export default Home;
