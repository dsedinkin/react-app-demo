import { FC, HTMLAttributes } from "react";
import { classNames, initials } from "engine/utils";

import { useGlobalValue } from "elum-state";
import { FRIENDS } from "engine/state";

import { SimpleCell, Avatar, Spinner } from "@vkontakte/vkui";

import "./FriendsContent.css";

interface IFriendsContentProps extends HTMLAttributes<HTMLDivElement> { };

const FriendsContent: FC<IFriendsContentProps> = ({
  className,
  ...restProps
}) => {
  const friends = useGlobalValue(FRIENDS);

  return (
    <div {...restProps} className={classNames("FriendsContent", className)}>
      {friends && friends.length > 0 ? (
        friends.map((friend, key) => (
          <SimpleCell
            key={`SimpleCell--${key}`}
            before={<Avatar size={48} initials={initials(friend?.name)} gradientColor="blue" />}
            subtitle={friend.email}
            extraSubtitle={friend.phone}
          >
            {friend.name}
          </SimpleCell>
        ))
      ) : (
        <Spinner size="small" />
      )}
    </div>
  );
};

export default FriendsContent;
