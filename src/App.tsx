import { FC, useEffect } from "react";
import { useRoute } from "engine";

import { useRecoilValue } from "recoil";
import { ACTIVE_PAGE, ACTIVE_PANEL } from "engine/state";

import { Epic, View, withAdaptivity } from "@vkontakte/vkui";
import { VKUIProvider, AppTabbar } from "components";

import { Home, Profile, Friends } from "parent";

const App: FC = () => {
  const history = useRoute();

  const activeStory = useRecoilValue(ACTIVE_PAGE);
  const activePanel = useRecoilValue(ACTIVE_PANEL);

  useEffect(() => {
    window.addEventListener("popstate", () => history.backPage());
    window.history.pushState(undefined, "");
  }, []);

  return (
    <VKUIProvider>
      <Epic
        activeStory={activeStory}
        tabbar={<AppTabbar />}
      >
        <View id="home" activePanel="home">
          <Home id="home" />
        </View>
        <View id="profile" activePanel={activePanel}>
          <Profile id="profile" />
          <Friends id="friends" />
        </View>
      </Epic>
    </VKUIProvider>
  );
};

export default withAdaptivity(App, { viewWidth: true });
