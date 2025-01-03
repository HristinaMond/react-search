import React from 'react';
import {influentialPeople} from "../Search/search-dummy-data";

// Create the Context with default values
const SearchContext = React.createContext({
    searchResults: influentialPeople,
    filterSearchResults: () => {},
    setSearchTerm: (arg: string) => {},  // Accepts only 'string'
    searchTerm: ''
});

export const useSearch = () => React.useContext(SearchContext);

type SearchContextProviderProps = {
    children: React.ReactNode;
}
export const SearchProvider = ({ children }: SearchContextProviderProps) => {

    const [searchResults, setSearchResults] = React.useState(influentialPeople);
    const [searchTerm, setSearchTerm] = React.useState("");


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
