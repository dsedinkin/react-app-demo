import { FC, HTMLAttributes, Fragment, useEffect, useMemo } from "react";
import { useRouteNavigator } from "@vkontakte/vk-mini-app-router";
import api from "engine/api/methods";
import { classNames, initials } from "engine/utils";

import { useGlobalValue } from "elum-state";
import { FRIENDS } from "engine/state";

import { Header, SimpleCell, Spinner, Avatar, CellButton } from "@vkontakte/vkui";

import { Icon24Add } from "@vkontakte/icons";

import "./ProfileContent.css";

interface IProfileContentProps extends HTMLAttributes<HTMLDivElement> { };

const ProfileContent: FC<IProfileContentProps> = ({
  className,
  ...restProps
}) => {
  const routeNavigator = useRouteNavigator();

  const friends = useGlobalValue(FRIENDS);
  const threeFriends = useMemo(() => friends ? friends.slice(0, 3) : [], [friends]);

  useEffect(() => {
    api.getFriends();
  }, []);

  return (
    <div {...restProps} className={classNames("ProfileContent", className)}>
      <div className="ProfileContent__content">
        <Header
          mode="primary"
          indicator={friends ? friends?.length : 0}
        >
          Друзья
        </Header>
        {friends?.length > 0 ? (
          <Fragment>
            {threeFriends.map((friend, key) => (
              <SimpleCell
                key={`SimpleCell--${key}`}
                before={<Avatar size={48} initials={initials(friend?.name)} gradientColor="blue" />}
                subtitle={friend.email}
                extraSubtitle={friend.phone}
              >
                {friend.name}
              </SimpleCell>
            ))}
            <div className="ProfileContent__button">
              <CellButton
                onClick={() => routeNavigator.push("/profile/friends")}
                before={<Icon24Add />}
                centered
              >
                Показать всех друзей
              </CellButton>
            </div>
          </Fragment>
        ) : (
          <Spinner size="small" />
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
