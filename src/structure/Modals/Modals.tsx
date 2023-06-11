import { FC, HTMLAttributes } from "react";
import { useRouteNavigator, useActiveVkuiLocation } from "@vkontakte/vk-mini-app-router";

import { ModalRoot, ModalCard, Button, Cell } from "@vkontakte/vkui";

import { Icon56Stars3Outline, Icon28TagOutline, Icon28BillSeparatedOutline, Icon28IncognitoOutline } from "@vkontakte/icons";

interface IModals extends HTMLAttributes<HTMLDivElement> {
  activeModal?: string;
};

const Modals: FC<IModals> = ({
  activeModal,
  className,
  ...restProps
}) => {
  const routeNavigator = useRouteNavigator();

  const handleClose = () => routeNavigator.hideModal();

  return (
    <ModalRoot {...restProps} activeModal={activeModal}>
      <ModalCard
        id="default"
        nav="default"
        onClose={handleClose}
        icon={<Icon56Stars3Outline />}
        header="Это модальное окно"
        subheader="Короткое описание, а может и не короткое"
        actions={
          <Button
            size="l"
            mode="primary"
            stretched
            onClick={handleClose}
          >
            Понятно
          </Button>
        }
      >
        <div className="ModalCard__content">
          <Cell before={<Icon28TagOutline />} subtitle="Короткое описание">
            Number one
          </Cell>
          <Cell before={<Icon28BillSeparatedOutline />} subtitle="Короткое описание">
            Number two
          </Cell>
          <Cell before={<Icon28IncognitoOutline />} subtitle="Елочка гори">
            Number three
          </Cell>
        </div>
      </ModalCard>
    </ModalRoot>
  );
};

export default Modals;
