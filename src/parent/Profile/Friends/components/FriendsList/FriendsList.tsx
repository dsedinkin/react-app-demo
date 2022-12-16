import { FC, HTMLAttributes } from "react";

import { useRecoilValue } from "recoil";
import { FRIENDS } from "engine/state";

import { SimpleCell, InitialsAvatar, Spinner } from "@vkontakte/vkui";

import classNames from "engine/utils/classNames";

import "./FriendsList.css";

interface IFriendsListProps extends HTMLAttributes<HTMLDivElement> { };

const FriendsList: FC<IFriendsListProps> = ({
    className,
    ...restProps
}) => {
    const friends = useRecoilValue(FRIENDS);

    return (
        <div
            {...restProps}
            className={classNames("FriendsList", className)}
        >
            {
                friends && friends.length > 0 ? (
                    friends.map(friend => (
                        <SimpleCell
                            key={"ProfileFriendsList__cell" + friend.id}
                            before={
                                <InitialsAvatar
                                    size={48}
                                    gradientColor="blue"
                                >
                                    {friend && friend.name && friend.name.split(" ").map(v => v[0]).join("")}
                                </InitialsAvatar>
                            }
                            subtitle={friend.email}
                            extraSubtitle={friend.phone}
                        >
                            {friend.name}
                        </SimpleCell>
                    ))
                ) : (
                    <Spinner size="small" />
                )
            }
        </div>
    );
};

export default FriendsList;
