import React, { forwardRef } from "react";

type OptionProps = {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
};

export const Option = forwardRef<HTMLDivElement, OptionProps>(
    ({ children, style, onClick }, ref) => {
        return (
            <div
                className="dropdown-item"
                ref={ref}
                style={style}
                onClick={onClick}

            >
                {children}
            </div>
        );
    }
);