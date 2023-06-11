import { FC, HTMLAttributes } from "react";
import { classNames } from "engine/utils";

import { Panel } from "@vkontakte/vkui";
import { ProfileHeader as Header, ProfileContent as Content } from "engine/fragments";

import "./Profile.css";

interface IProfileProps extends HTMLAttributes<HTMLDivElement> {
  nav: string;
};

const Profile: FC<IProfileProps> = ({
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

export default Profile;
