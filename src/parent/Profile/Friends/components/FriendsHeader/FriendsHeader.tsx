import { FC, HTMLAttributes } from "react";
import { useRoute } from "engine";

import { PanelHeader, PanelHeaderBack } from "@vkontakte/vkui";

import classNames from "engine/utils/classNames";

import "./FriendsHeader.css";

interface IFriendsHeaderProps extends HTMLAttributes<HTMLDivElement> { };

const FriendsHeader: FC<IFriendsHeaderProps> = ({
    className,
    ...restProps
}) => {
    const history = useRoute();

    return (
        <div
            {...restProps}
            className={classNames("FriendsHeader", className)}
        >
            <PanelHeader before={<PanelHeaderBack onClick={() => history.backPage()} label="Назад" />}>
                Друзья
            </PanelHeader>
        </div>
    );
};

export default FriendsHeader;
