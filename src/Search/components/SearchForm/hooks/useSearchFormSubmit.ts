import React from 'react';
import {useSearchTime} from "../../SearchTimeCompletionAndResults/hooks";
import {useRecentSearches} from "../../SearchRecentSearches/hooks";
import {useDropdown} from "@common/components/dropdowns/Dropdown/hooks";
import {useSearch} from "../../../../store/SearchContext.tsx";

export const useSearchFormSubmit = () => {
    const formRef = React.useRef<HTMLFormElement | null>(null);  // Type the formRef for better typing
    const { searchTime, measureSearchTime } = useSearchTime();
    const { updateRecentSearches } = useRecentSearches();
    const { setIsDropdownOpen } = useDropdown();
    const { searchTerm, setSearchTerm, filterSearchResults } = useSearch(); // Access context

    const handleSearchFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const searchTermFromForm = formData.get('search')?.toString() || ''; // Get search term or set to empty string

        if (searchTermFromForm) {
            // Set the search term directly
            setSearchTerm(searchTermFromForm);
        }

        // Measure search time
        const startTime = Number(performance.now());
        measureSearchTime(startTime);

        // Update recent searches with the search term
        updateRecentSearches(searchTermFromForm); // Use the search term directly

        // Optionally filter search results (uncomment if you want to call it)
        filterSearchResults();

        // Close dropdown after search
        setIsDropdownOpen(false);


    };

    return { formRef, handleSearchFormSubmit, searchTime };
};
