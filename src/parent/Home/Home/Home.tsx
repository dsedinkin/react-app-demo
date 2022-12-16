import { FC } from "react";

import { Panel } from "@vkontakte/vkui";
import { HomeHeader, HomePlaceholder } from "./components";

import { TPanel } from "engine/types";

import "./Home.css";

interface IHomeProps {
    id: TPanel;
};

const Home: FC<IHomeProps> = ({ id }) => {
    return (
        <Panel id={id}>
            <HomeHeader />
            <HomePlaceholder />
        </Panel>
    );
};

export default Home;
