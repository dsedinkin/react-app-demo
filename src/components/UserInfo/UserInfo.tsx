import { FC, HTMLAttributes, ReactNode } from "react";

import { Avatar, Link } from "@vkontakte/vkui";
import { Icon20HomeOutline, Icon20UserOutline } from "@vkontakte/icons";

import classNames from "engine/utils/classNames";

import "./UserInfo.css";

interface IUserInfoProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    title: string;
    city?: string;
    href?: string;
    after?: ReactNode;
};

const UserInfo: FC<IUserInfoProps> = ({
    src,
    title,
    city,
    href,
    after,
    className,
    ...restProps
}) => (
    <div
        {...restProps}
        className={classNames("UserInfo", className)}
    >
        <div className="UserInfo__content">
            <div className="UserInfo__container">
                <Avatar className="UserInfo__avatar" size={88} src={src} />
                <div className="UserInfo__title">
                    {title}
                </div>
                <div className="UserInfo__cells">
                    {
                        city &&
                        <div className="UserInfo__cell">
                            <Icon20HomeOutline width={16} height={16} />
                            {city}
                        </div>
                    }
                    {
                        href &&
                        <div className="UserInfo__cell">
                            <Icon20UserOutline width={16} height={16} fill="var(--accent)" />
                            <Link href={href} target="_blank">
                                Открыть профиль
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <div className="UserInfo__after">
                {after}
            </div>
        </div>
    </div>
);

export default UserInfo;
