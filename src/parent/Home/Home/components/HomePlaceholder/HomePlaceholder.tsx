import { FC, HTMLAttributes } from "react";
import { useRoute } from "engine";

import { Placeholder, Button } from "@vkontakte/vkui";
import { IconPlaceholder } from "engine/icons";

import classNames from "engine/utils/classNames";

import "./HomePlaceholder.css";

interface IHomePlaceholderProps extends HTMLAttributes<HTMLDivElement> { };

const HomePlaceholder: FC<IHomePlaceholderProps> = ({
    className,
    ...restProps
}) => {
    const history = useRoute();

    return (
        <div
            {...restProps}
            className={classNames("HomePlaceholder", className)}
        >
            <Placeholder
                icon={<IconPlaceholder />}
                header="Немного лирики"
                action={
                    <Button
                        onClick={() => history.nextPage({ activeModal: "default" })}
                        size="m"
                    >
                        Нажми на меня
                    </Button>
                }
                stretched
            >
                Прежде чем описание станет хорошим, его необходимо написать. <br />Не правда ли?
            </Placeholder>
        </div>
    );
};

export default HomePlaceholder;
