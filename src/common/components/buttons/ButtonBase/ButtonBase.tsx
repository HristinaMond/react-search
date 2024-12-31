import React, {ButtonHTMLAttributes} from "react";

export type ButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonBase = ({children, onClick, ...props}: ButtonBaseProps) => {
    return (
        <button
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}