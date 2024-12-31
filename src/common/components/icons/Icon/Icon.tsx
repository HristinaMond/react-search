import React from "react";
import './style/Icon.css';

export type IconProps = {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export const Icon = ({ className, children , style}: IconProps) => {
    return (
        <div
           className={`icon ${className || ''}`}
           style={style}
        >
            {children}
        </div>
    )
}