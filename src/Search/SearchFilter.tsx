import React from 'react';
import {useSearch} from "../store/SearchContext.tsx";

const SearchFilterComponent = () => {

    const { setSearchTerm, filterSearchResults } = useSearch(); // Access context

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Set the search term
        filterSearchResults(); // Trigger filtering
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter name to filter"
                onChange={handleSearchChange} // Call handler on input change
            />
        </div>
    );
};

export default SearchFilterComponent;
