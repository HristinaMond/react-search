import React from 'react';

export const useDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
    const dropdownRef = React.useRef(null);

    const handleClickOutside = React.useCallback((event: any) => {
        //@ts-ignore
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    }, [isDropdownOpen]);

    React.useEffect(() => {
        document.addEventListener("pointerdown", handleClickOutside);
        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, [handleClickOutside, isDropdownOpen]);

    return { isDropdownOpen, setIsDropdownOpen, dropdownRef };
};
