import React from "react";

type OptionsProps = {
    children?: React.ReactNode;
}

export const Options = ({children}: OptionsProps) => {
    return (
        <div className="dropdown-menu" id="dropdownMenu">
            {children}
        </div>

    )
}
