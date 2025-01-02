import React, {HTMLAttributes} from "react";
import './style/Icon.css';

export type IconProps = HTMLAttributes<HTMLDivElement>;

export const Icon = ({className, children, style, ...props}: IconProps) => {
    return (
        <div
            className={`icon ${className || ''}`}
            style={style}
            {...props}
        >
            {children}
        </div>
    )
}