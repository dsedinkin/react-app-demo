import { FC, HTMLAttributes } from "react";
import { useRouteNavigator, useActiveVkuiLocation } from "@vkontakte/vk-mini-app-router";
import { useUpdateConfig } from "engine/hooks";

import { DEFAULT_EPIC, DEFAULT_VIEW_FIRST, DEFAULT_VIEW_SECOND } from "engine/state";

import { SplitLayout, SplitCol, Epic, View } from "@vkontakte/vkui";
import { Modals, Navigation, Home, Profile, Friends } from "structure";

interface App extends HTMLAttributes<HTMLDivElement> { };

const App: FC<App> = () => {
  const routeNavigator = useRouteNavigator();
  const { view: activeView = DEFAULT_EPIC, panel: activePanel, modal: activeModal, panelsHistory } = useActiveVkuiLocation();

  useUpdateConfig();

  return (
    <SplitLayout modal={<Modals activeModal={activeModal} />}>
      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <Epic activeStory={activeView} tabbar={<Navigation activeTab={activeView} />}>
          <View
            id="home"
            nav="home"
            activePanel={DEFAULT_VIEW_FIRST}
          >
            <Home nav="home" />
          </View>
          <View
            id="profile"
            nav="profile"
            history={panelsHistory}
            activePanel={activePanel || DEFAULT_VIEW_SECOND}
            onSwipeBack={() => routeNavigator.back()}
          >
            <Profile nav="profile" />
            <Friends nav="friends" />
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
