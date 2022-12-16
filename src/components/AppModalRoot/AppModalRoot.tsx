import { FC, HTMLAttributes } from "react";
import { useRoute } from "engine";

import { useRecoilValue } from "recoil";
import { ACTIVE_MODAL } from "engine/state";

import { ModalRoot, ModalCard, Button, Cell } from "@vkontakte/vkui";
import { Icon56Stars3Outline, Icon28TagOutline, Icon28BillSeparatedOutline, Icon28IncognitoOutline } from "@vkontakte/icons";

import "./AppModalRoot.css";

interface IAppModalRootProps extends HTMLAttributes<HTMLDivElement> { };

const AppModalRoot: FC<IAppModalRootProps> = ({
    className,
    ...restProps
}) => {
    const history = useRoute();
    const activeModal = useRecoilValue(ACTIVE_MODAL);

    return (
        <ModalRoot
            {...restProps}
            activeModal={activeModal}
        >
            <ModalCard
                id="default"
                onClose={() => history.backPage()}
                icon={<Icon56Stars3Outline />}
                header="Это модальное окно"
                subheader="Короткое описание, а может и не короткое"
                actions={
                    <Button
                        size="l"
                        mode="primary"
                        stretched
                        onClick={() => history.backPage()}
                    >
                        Понятно
                    </Button>
                }
            >
                <div className="ModalCard__content">
                    <Cell
                        before={<Icon28TagOutline />}
                        subtitle="Короткое описание"
                    >
                        Number one
                    </Cell>
                    <Cell
                        before={<Icon28BillSeparatedOutline />}
                        subtitle="Короткое описание"
                    >
                        Number two
                    </Cell>
                    <Cell
                        before={<Icon28IncognitoOutline />}
                        subtitle="Елочка гори"
                    >
                        Number three
                    </Cell>
                </div>
            </ModalCard>
        </ModalRoot>
    );
};

export default AppModalRoot;
