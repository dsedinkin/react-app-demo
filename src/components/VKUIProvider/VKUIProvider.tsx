import { FC, HTMLAttributes, useEffect } from "react";

import { useRecoilState } from "recoil";
import { SCHEME } from "engine/state";

import { ConfigProvider, AppRoot, SplitLayout, SplitCol } from "@vkontakte/vkui";
import { AppModalRoot } from "components";

import bridge from "@vkontakte/vk-bridge";

import classNames from "engine/utils/classNames";

import "./VKUIProvider.css";

interface IVKUIProviderProps extends HTMLAttributes<HTMLDivElement> { };

const VKUIProvider: FC<IVKUIProviderProps> = ({
    className,
    children,
    ...restProps
}) => {
    const [scheme, setSheme] = useRecoilState(SCHEME);

    const updateStatusBarColor = () => {
        if (bridge.supports("VKWebAppSetViewSettings")) {
            bridge.send("VKWebAppSetViewSettings",
                scheme === "dark" ? {
                    "status_bar_style": "light",
                    "action_bar_color": "#19191a"
                } : {
                    "status_bar_style": "dark",
                    "action_bar_color": "#ffffff"
                }
            );
        };
    };

    useEffect(() => {
        bridge.subscribe(({ detail: { type, data } }) => {
            if (type === "VKWebAppUpdateConfig") {
                setSheme((data as any).appearance);
            };
        });
        updateStatusBarColor();
    }, []);

    useEffect(() => {
        updateStatusBarColor();
    }, [scheme]);

    return (
        <div
            {...restProps}
            className={classNames("VKUIProvider", className)}
        >
            <ConfigProvider appearance={scheme} platform="ios">
                <AppRoot>
                    <SplitLayout
                        modal={
                            <AppModalRoot />
                        }
                    >
                        <SplitCol
                            width="100%"
                            maxWidth="100%"
                            animate
                        >
                            {children}
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </ConfigProvider>
        </div>
    );
};

export default VKUIProvider;
