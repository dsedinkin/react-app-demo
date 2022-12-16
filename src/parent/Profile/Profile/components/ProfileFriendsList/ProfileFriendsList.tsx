import { FC, HTMLAttributes, useEffect, useMemo } from "react";
import { useRoute, useApi } from "engine";

import { useRecoilValue } from "recoil";
import { FRIENDS } from "engine/state";

import { Header, SimpleCell, Spinner, InitialsAvatar, CellButton } from "@vkontakte/vkui";
import { Icon24Add } from "@vkontakte/icons";

import classNames from "engine/utils/classNames";

import "./ProfileFriendsList.css";

interface IProfileFriendsListProps extends HTMLAttributes<HTMLDivElement> { };

const ProfileFriendsList: FC<IProfileFriendsListProps> = ({
    className,
    ...restProps
}) => {
    const history = useRoute();
    const request = useApi();

    const friends = useRecoilValue(FRIENDS);
    const threeFriends = useMemo(() => friends ? friends.slice(0, 3) : [], [friends]);

    useEffect(() => {
        request.getFriends();
    }, []);

    return (
        <div
            {...restProps}
            className={classNames("ProfileFriendsList", className)}
        >
            <div className="ProfileFriendsList__content">
                <Header
                    mode="primary"
                    indicator={friends ? friends.length : 0}
                >
                    Друзья
                </Header>
                {
                    friends && friends.length > 0 ? (
                        <>
                            {
                                threeFriends.map(friend => (
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
                            }
                            <div className="ProfileFriendsList__button">
                                <CellButton
                                    onClick={() => history.nextPage({ activePage: "profile", activePanel: "friends" })}
                                    before={<Icon24Add />}
                                    centered
                                >
                                    Показать всех друзей
                                </CellButton>
                            </div>
                        </>
                    ) : (
                        <Spinner size="small" />
                    )
                }
            </div>
        </div>
    );
};

export default ProfileFriendsList;
