import React, { HTMLAttributes } from "react";

type OptionProps = HTMLAttributes<HTMLDivElement>;

export const Option = ({ children, style, onClick, ...props }: OptionProps) => {
    return (
        <div
            style={style}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};
