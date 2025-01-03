import React from 'react';
import {influentialPeople} from "../Search/search-dummy-data";

// Create the Context with default values
const SearchContext = React.createContext({
    searchResults: influentialPeople,
    filterSearchResults: () => {},
    setSearchTerm: (arg: string) => {},  // Accepts only 'string'
    searchTerm: '',
    searchTime: 0
});

export const useSearch = () => React.useContext(SearchContext);

type SearchContextProviderProps = {
    children: React.ReactNode;
}
export const SearchProvider = ({ children }: SearchContextProviderProps) => {

    const [searchResults, setSearchResults] = React.useState(influentialPeople);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchTime, setSearchTime] = React.useState<number>(0); // State to hold search time


    const filterSearchResults = () => {
        const startTime = performance.now();

        const filtered = influentialPeople.filter(person =>
            person.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const endTime = performance.now(); // Record the end time
        const timeInSeconds = (endTime - startTime);
        setSearchTime(timeInSeconds);

        setSearchResults(filtered);
    };

    React.useEffect(() => {
        filterSearchResults();
    }, [searchTerm]);


    return (
        <SearchContext.Provider value={{ searchResults, filterSearchResults, searchTerm, setSearchTerm, searchTime }}>
            {children}
        </SearchContext.Provider>
    );
};
