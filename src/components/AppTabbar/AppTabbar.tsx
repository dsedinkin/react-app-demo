import { FC, HTMLAttributes, MouseEventHandler } from "react";
import { useRoute } from "engine";

import { useRecoilValue } from "recoil";
import { ACTIVE_PAGE } from "engine/state";

import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { Icon28NewsfeedLinesOutline } from "@vkontakte/icons";
import { IconVmoji } from "engine/icons";

import classNames from "engine/utils/classNames";

import "./AppTabbar.css";

interface IAppTabbarProps extends HTMLAttributes<HTMLDivElement> { };

const AppTabbar: FC<IAppTabbarProps> = ({
    className,
    ...restProps
}) => {
    const history = useRoute();

    const activeStory = useRecoilValue(ACTIVE_PAGE);

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => history.nextPage({ activePage: e.currentTarget.dataset.story });

    return (
        <div
            {...restProps}
            className={classNames("AppTabbar", className)}
        >
            <Tabbar>
                <TabbarItem
                    onClick={handleClick}
                    selected={activeStory === "home"}
                    data-story="home"
                    text="Placeholder"
                >
                    <Icon28NewsfeedLinesOutline />
                </TabbarItem>
                <TabbarItem
                    onClick={handleClick}
                    selected={activeStory === "profile"}
                    data-story="profile"
                    text="Профиль"
                >
                    <IconVmoji className="Icon" />
                </TabbarItem>
            </Tabbar>
        </div>
    );
};

export default AppTabbar;
