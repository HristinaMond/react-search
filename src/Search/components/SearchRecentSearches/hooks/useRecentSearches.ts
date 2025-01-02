import React from 'react';

export const useRecentSearches = () => {
    const [recentSearches, setRecentSearches] = React.useState<string[]>([]);

    // On initial load, get saved searches from localStorage
    React.useEffect(() => {
        const savedSearches = localStorage.getItem('recentSearches');
        if (savedSearches) {
            setRecentSearches(JSON.parse(savedSearches));
        }
    }, []);

    // Update recent searches in localStorage and state
    const updateRecentSearches = (newSearch: string) => {
        const updatedSearches = newSearch != '' ?
            [newSearch, ...recentSearches.filter((search) => search !== newSearch)] :
            recentSearches

        // Limit the array to 10 items
        const limitedSearches = updatedSearches.slice(0, 10);

        // Update state and localStorage
        setRecentSearches(limitedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(limitedSearches));
    };

    // Remove a specific search term from both state and localStorage
    const removeSearch = (termToRemove: string) => {

        console.log("Removing:", termToRemove); // Debugging log
        const updatedSearches = recentSearches.filter(term => term !== termToRemove);

        // Debugging state before updating
        console.log("State before update:", recentSearches);
        console.log("Updated searches:", updatedSearches);

        // Update the state and localStorage
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

        // Debugging state after updating
        console.log("State after update:", updatedSearches);
    };


    return {recentSearches, updateRecentSearches, removeSearch};
};
