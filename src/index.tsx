import ReactDOM from "react-dom";
import "core-js/features/map";
import "core-js/features/set";

import { RecoilRoot } from "recoil";

import App from "./App";

import "./style.css";

import { AdaptivityProvider } from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";

import "@vkontakte/vkui/dist/vkui.css";

ReactDOM.render(
    <RecoilRoot>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </RecoilRoot>,
    document.getElementById("root")
);

bridge.send("VKWebAppInit", {});
