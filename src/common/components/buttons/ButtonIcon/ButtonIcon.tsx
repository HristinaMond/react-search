import './style/ButtonIcon.css';
import React from "react";
import {ButtonBase, ButtonBaseProps} from '@common/components/buttons';

const ICON_BUTTON_BASE = "btn-icon";

type ButtonIconModifier = 'primary' | 'secondary';

type ButtonIconProps = ButtonBaseProps & {
    modifier: ButtonIconModifier
}

export const ButtonIcon = ({modifier, children, disabled, ...props}: ButtonIconProps) => {

    const className = `${ICON_BUTTON_BASE} ${modifier ? `${ICON_BUTTON_BASE}--${modifier}` : `${ICON_BUTTON_BASE}--primary`}`

    return (
        <ButtonBase
            className={className}
            disabled={disabled}
            {...props}
        >
            {children}
        </ButtonBase>
    )
}
