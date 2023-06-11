import bridge, { AppearanceType } from "@vkontakte/vk-bridge";

const setViewSettings = (appearance: AppearanceType) => {
  if (bridge.supports("VKWebAppSetViewSettings")) {
    bridge.send("VKWebAppSetViewSettings", appearance === "dark" ? {
      "status_bar_style": "light",
      "action_bar_color": "#19191a",
      "navigation_bar_color": "#19191a"
    } : {
      "status_bar_style": "dark",
      "action_bar_color": "#ffffff",
      "navigation_bar_color": "#ffffff"
    });
  };
};

export default setViewSettings;