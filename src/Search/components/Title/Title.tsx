import React from "react";

type TitleProps = {
    children?: React.ReactNode
}
export const Title =( { children }: TitleProps) => {
    return (
        <div
            style={{
                display: 'flex',
                alignSelf: 'center',
                padding: '10px'
            }}>
            {children}
        </div>

    )
}