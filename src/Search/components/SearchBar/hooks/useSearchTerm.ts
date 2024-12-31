import React from 'react';
import { debounce } from "../../../../utils/debounce.ts";

export const useSearchTerm = () => {
    const [searchTerm, setSearchTerm] = React.useState<string>('');

    const handleSearchChange = React.useMemo(() => {
            return debounce((e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
            }, 500);
        },
        []
    );

    return { searchTerm, setSearchTerm, handleSearchChange };
};
