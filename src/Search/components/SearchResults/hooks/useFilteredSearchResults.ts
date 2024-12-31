import React from "react";
import {influentialPeople} from "../../../search-dummy-data";

export const useFilteredSearchResults = () => {

    const [people] = React.useState(influentialPeople); // State for all people
    const [filteredSearchResults, setFilteredSearchResults] = React.useState([]); // State for filtered people

    // Filter function to filter by fullName
    const filterPeople = () => {
        const filtered = people.filter(person => person?.fullName.toLowerCase() === 'elon musk');
        setFilteredSearchResults(filtered); // Update filtered data
        console.log('called filter')
    };

    return { filterPeople, filteredSearchResults, setFilteredSearchResults };
};
