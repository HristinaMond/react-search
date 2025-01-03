import React from 'react';
import {useRecentSearches} from "../../SearchRecentSearches/hooks";
import {useDropdown} from "@common/components/dropdowns/Dropdown/hooks";
import {useSearch} from "../../../../store/SearchContext.tsx";

export const useSearchFormSubmit = () => {
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const { updateRecentSearches } = useRecentSearches();
    const { setIsDropdownOpen } = useDropdown();
    const { setSearchTerm, filterSearchResults } = useSearch(); // Access context

    const handleSearchFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const searchTermFromForm = formData.get('search')?.toString() || '';
        if (searchTermFromForm) {
            setSearchTerm(searchTermFromForm);
        }

        updateRecentSearches(searchTermFromForm);
        filterSearchResults();

        setIsDropdownOpen(false);


    };

    return { formRef, handleSearchFormSubmit };
};
