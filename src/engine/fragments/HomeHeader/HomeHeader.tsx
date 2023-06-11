import { FC, HTMLAttributes } from "react";
import { classNames } from "engine/utils";

import { PanelHeader } from "@vkontakte/vkui";

import { IconVKUI } from "engine/icons";

import "./HomeHeader.css";

interface IHomeHeaderProps extends HTMLAttributes<HTMLDivElement> { };

const HomeHeader: FC<IHomeHeaderProps> = ({
  className,
  ...restProps
}) => {
  return (
    <div {...restProps} className={classNames("HomeHeader", className)}>
      <PanelHeader separator={false}>
        <IconVKUI />
      </PanelHeader>
    </div>
  );
};

export default HomeHeader;
