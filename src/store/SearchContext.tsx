import React, {createContext, ReactNode, useContext, useState} from 'react';
import {influentialPeople} from "../Search/search-dummy-data";

// Create the Context with default values
const SearchContext = createContext({
    searchResults: influentialPeople,
    filterSearchResults: () => {},
    setSearchTerm: (arg: string | undefined) => {},
    searchTerm: ''
});

export const useSearch = () => useContext(SearchContext);

type SearchContextProviderProps = {
    children: ReactNode;
}
export const SearchProvider = ({ children }: SearchContextProviderProps) => {

    const [searchResults, setSearchResults] = useState(influentialPeople);
    const [searchTerm, setSearchTerm] = useState("");


    const filterSearchResults = () => {
        const filtered = influentialPeople.filter(person =>
            person.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filtered);
    };

    React.useEffect(() => {
        filterSearchResults()
    }, [searchTerm]);


    return (
        <SearchContext.Provider value={{ searchResults, filterSearchResults, searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};
