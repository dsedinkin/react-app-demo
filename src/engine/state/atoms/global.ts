import { atom } from "elum-state";

import { AppearanceType } from "@vkontakte/vk-bridge";
import { TFriends } from "engine/types";

export const APPEARANCE = atom<AppearanceType>({
  key: "appearance",
  default: "light"
});

export const FRIENDS = atom<TFriends>({
  key: "friends",
  default: undefined
});
