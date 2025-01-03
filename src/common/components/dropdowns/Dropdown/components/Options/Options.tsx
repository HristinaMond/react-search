import React, {HTMLAttributes} from "react";

type OptionsProps = HTMLAttributes<HTMLDivElement>;

export const Options = ({children}: OptionsProps) => {
    return (
        <div className="dropdown__menu" id="dropdownMenu">
            {children}
        </div>

    )
}
