import { atom } from "recoil";

import { AppearanceType } from "@vkontakte/vk-bridge";

import { TFriends } from "engine/types";

export const SCHEME = atom<AppearanceType>({
    key: "scheme",
    default: "light"
});

export const FRIENDS = atom<TFriends>({
    key: "friends",
    default: null
});
