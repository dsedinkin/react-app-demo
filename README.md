# demo-react-app

## Описание

Приложение "demo-react-app" для платформы VK Mini Apps.

## Стек

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Recoil](https://recoiljs.org/)
- [VK Bridge](https://dev.vk.com/mini-apps/bridge)
- [VK Mini Apps Deploy](https://github.com/VKCOM/vk-miniapps-deploy)
- [VKUI](https://dev.vk.com/libraries/vkui)

## Запуск

```bash
# Установка зависимостей
yarn

# Запуск
yarn start

# Сборка
yarn build

# Размещение приложения на хостинге VK Mini Apps
yarn deploy
```

Чтобы посмотреть приложение без локальной инициализации, oткройте https://vk.com/app51504769.

## Структура

- `public/`
    - `index.html`
- `src/`
    - `components/`
        - `AppModalRoot/`
            - `AppModalRoot.css`
            - `AppModalRoot.tsx`
        - `AppTabbar/`
            - `AppTabbar.css`
            - `AppTabbar.tsx`
        - `UserInfo/`
            - `UserInfo.css`
            - `UserInfo.tsx`
        - `VKUIProvider/`
            - `VKUIProvider.css`
            - `VKUIProvider.tsx`
        - `index.ts`
    - `engine/`
        - `hooks/`
            - `useRoute/`
                - `index.ts`
                - `useBackPage.ts`
                - `useNextPage.ts`
            - `useApi.ts`
            - `useCallbackState.ts`
            - `useCallbackValue.ts`
        - `icons/`
            - `IconPlaceholder.svg`
            - `IconVKUI.svg`
            - `IconVmoji.svg`
            - `index.ts`
        - `state/`
            - `atoms/`
                - `history.ts`
                - `index.ts`
            - `index.ts`
        - `utils/`
            - `classNames.ts`
        - `index.ts`
        - `types.ts`
    - `parent/`
        - `Home/`
            - `Home/`
                - `components/`
                    - `HomeHeader/`
                        - `HomeHeader.css`
                        - `HomeHeader.tsx`
                    - `HomePlaceholder/`
                        - `HomePlaceholder.css`
                        - `HomePlaceholder.tsx`
                    - `index.ts`
                - `Home.css`
                - `Home.tsx`
        - `Profile/`
            - `Friends/`
                - `components/`
                    - `FriendsHeader/`
                        - `FriendsHeader.css`
                        - `FriendsHeader.tsx`
                    - `FriendsList/`
                        - `FriendsList.css`
                        - `FriendsList.css`
                    - `index.ts`
                - `Friends.css`
                - `Friends.css`
            - `Profile/`
                - `components/`
                    - `ProfileFriendsList/`
                        - `ProfileFriendsList.css`
                        - `ProfileFriendsList.tsx`
                    - `ProfileHeader/`
                        - `ProfileHeader.css`
                        - `ProfileHeader.tsx`
                    - `index.ts`
                - `Profile.css`
                - `Profile.tsx`
        - `index.ts`
    - `App.tsx`
    - `index.tsx`
    - `style.css`
    - `types.d.ts`
- `.gitignore`
- `README.md`
- `package.json`
- `tsconfig.json`
- `vk-hosting-config.json`
