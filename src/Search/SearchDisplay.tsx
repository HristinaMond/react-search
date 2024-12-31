import React from 'react';
import {useSearch} from "../store/SearchContext.tsx";

const SearchDisplayComponent = () => {
    const { searchResults } = useSearch(); // Access the filtered search results

    return (
        <div>
            <h2>Filtered People:</h2>
            <ul>
                {searchResults.length > 0 ? (
                    searchResults.map(person => (
                        <li key={person.id}>
                            <strong>{person.fullName}</strong>: {person.description}
                        </li>
                    ))
                ) : (
                    <p>No people found</p>
                )}
            </ul>
        </div>
    );
};

export default SearchDisplayComponent;
