import { FC } from "react";

import { Panel } from "@vkontakte/vkui";
import { ProfileHeader, ProfileFriendsList } from "./components";

import { TPanel } from "engine/types";

import "./Profile.css";

interface IProfileProps {
    id: TPanel;
};

const Profile: FC<IProfileProps> = ({ id }) => {
    return (
        <Panel id={id}>
            <ProfileHeader />
            <ProfileFriendsList />
        </Panel>
    );
};

export default Profile;
