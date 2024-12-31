import React from "react";
import './style/Button.css';
import {ButtonBase, ButtonBaseProps} from '@common/components/buttons';

type ButtonProps = ButtonBaseProps

export const Button = ({children, onClick}: ButtonProps) => {
    return (
        <ButtonBase
            className='btn'
            onClick={onClick}
        >
            {children}
        </ButtonBase>
    )
}