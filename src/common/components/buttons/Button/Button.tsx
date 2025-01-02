import React from "react";
import './style/Button.css';
import {ButtonBase, ButtonBaseProps} from '@common/components/buttons';

type ButtonProps = ButtonBaseProps

export const Button = ({children, onClick, ...props}: ButtonProps) => {
    return (
        <ButtonBase
            className='btn'
            onClick={onClick}
            {...props}
        >
            {children}
        </ButtonBase>
    )
}