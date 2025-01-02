import React, {HTMLAttributes} from "react";

type DividerProps = HTMLAttributes<HTMLDivElement>;

export const Divider = ({ style, ...props } : DividerProps) => {
    return (
        <div
            style={{
                width: '1px',
                height: '24px',
                backgroundColor: '#dadce0',
                margin: '5px 0',
                ...style
            }}
            {...props}
        >

        </div>
    )
}