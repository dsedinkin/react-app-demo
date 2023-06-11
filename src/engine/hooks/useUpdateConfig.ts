import { useEffect } from "react";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-app-router";
import { setViewSettings } from "engine/action";

import bridge from "@vkontakte/vk-bridge";

import { setter } from "elum-state";
import { APPEARANCE } from "engine/state";

const useUpdateConfig = () => {
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

  useEffect(() => {
    const callback = (e: any) => {
      const detail = e?.detail;
      switch (detail?.type) {
        case "VKWebAppUpdateConfig":
          const { appearance } = detail?.data;
          setViewSettings(appearance);
          setter(APPEARANCE, appearance);
          break;
      };
    };
    bridge.subscribe(callback);

    return () => bridge.unsubscribe(callback);
  }, [activeView, activePanel]);
};

export default useUpdateConfig;
