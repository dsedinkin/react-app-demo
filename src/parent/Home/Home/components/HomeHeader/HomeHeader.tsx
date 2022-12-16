import { FC, HTMLAttributes } from "react";

import { PanelHeader } from "@vkontakte/vkui";
import { IconVKUI } from "engine/icons";

import classNames from "engine/utils/classNames";

import "./HomeHeader.css";

interface IHomeHeaderProps extends HTMLAttributes<HTMLDivElement> { };

const HomeHeader: FC<IHomeHeaderProps> = ({
    className,
    ...restProps
}) => {
    return (
        <div
            {...restProps}
            className={classNames("HomeHeader", className)}
        >
            <PanelHeader
                separator={false}
            >
                <IconVKUI />
            </PanelHeader>
        </div>
    );
};

export default HomeHeader;
