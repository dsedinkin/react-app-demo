import { FC } from "react";

import { Panel } from "@vkontakte/vkui";
import { FriendsHeader, FriendsList } from "./components";

import { TPanel } from "engine/types";

import "./Friends.css";

interface IFriendsProps {
    id: TPanel;
};

const Friends: FC<IFriendsProps> = ({ id }) => {
    return (
        <Panel id={id}>
            <FriendsHeader />
            <FriendsList />
        </Panel>
    );
};

export default Friends;
