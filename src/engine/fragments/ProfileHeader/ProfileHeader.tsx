import { FC, HTMLAttributes, MouseEventHandler, useState, useEffect } from "react";
import { setViewSettings } from "engine/action";
import { classNames } from "engine/utils";

import { useGlobalState } from "elum-state";
import { APPEARANCE } from "engine/state";

import { PanelHeader, PanelHeaderButton, SimpleCell, Switch } from "@vkontakte/vkui";
import { UserInfo } from "engine/components";

import { Icon28SunOutline, Icon28MoonOutline, Icon28LightbulbOutline } from "@vkontakte/icons";
import { IconVKUI } from "engine/icons";

import bridge from "@vkontakte/vk-bridge";

import "./ProfileHeader.css";

interface IProfileHeaderProps extends HTMLAttributes<HTMLDivElement> { };

const ProfileHeader: FC<IProfileHeaderProps> = ({
  className,
  ...restProps
}) => {
  const [{ id, photo_200, first_name, last_name, city }, setUserInfo] = useState<any>({ id: undefined, photo_200: undefined, first_name: undefined, last_name: undefined, city: undefined });
  const [isAvailable, setIsAvailable] = useState(false);
  const [level, setLevel] = useState(0);

  const [appearance, setAppearance] = useGlobalState(APPEARANCE);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    const newAppearance = appearance === "dark" ? "light" : "dark";
    setAppearance(newAppearance);
    setViewSettings(newAppearance);
  };

  useEffect(() => {
    if (bridge.supports("VKWebAppFlashGetInfo")) {
      bridge.send("VKWebAppFlashGetInfo")
        .then((data) => {
          console.log({ VKWebAppFlashGetInfo: data });
          setIsAvailable(!!data.is_available);
          if (data.is_available) {
            setLevel(data.level);
          };
        });
    };
    if (bridge.supports("VKWebAppGetUserInfo") && !id) {
      bridge.send("VKWebAppGetUserInfo")
        .then((data) => {
          console.log({ VKWebAppGetUserInfo: data });
          setUserInfo(data as any);
        });
    };
  }, []);

  return (
    <div {...restProps} className={classNames("ProfileHeader", className)}>
      <PanelHeader
        separator={false}
        before={
          <PanelHeaderButton aria-label="Сменить тему приложения" onClick={handleClick}>
            {appearance === "dark" ? (
              <Icon28SunOutline />
            ) : (
              <Icon28MoonOutline />
            )}
          </PanelHeaderButton>
        }
      >
        <IconVKUI />
      </PanelHeader>
      <UserInfo
        src={photo_200 && photo_200}
        title={(first_name && last_name) ? first_name + " " + last_name : "..."}
        city={city?.title}
        href={id && `https://vk.com/id${id}`}
        after={
          <SimpleCell
            extraSubtitle={isAvailable ? "На телефоне включится фонарик" : "Функция не поддерживается"}
            before={<Icon28LightbulbOutline />}
            after={
              <Switch
                checked={level === 1}
                onChange={() => {
                  const newLevel = level === 1 ? 0 : 1;
                  bridge.send("VKWebAppFlashSetLevel", { level: newLevel })
                    .then((data) => {
                      if (data.result) {
                        setLevel(newLevel);
                      }
                    });
                }}
                disabled={!isAvailable}
              />
            }
          >
            Больше света
          </SimpleCell>
        }
      />
    </div>
  );
};

export default ProfileHeader;
