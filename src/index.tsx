import { createRoot } from "react-dom/client";
import bridge from "@vkontakte/vk-bridge";

import AppConfig from "./AppConfig";

import "@vkontakte/vkui/dist/cssm/styles/themes.css";
import "./style.css";

const app = document.getElementById("app") as HTMLElement;
const root = createRoot(app);

root.render(<AppConfig />);

bridge.send("VKWebAppInit");
