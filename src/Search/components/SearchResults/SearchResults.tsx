import React from "react";
import {useSearch} from "../../../store/SearchContext.tsx";

export const SearchResults = ({ searchTerm }) => {

    const { searchResults } = useSearch();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
            }}>

            {searchResults?.length > 0 ? (searchResults.map((user: any) => {

                    const formattedFullName = user?.fullName?.replace(' ', '_');

                    return (
                        <div
                            key={`search-result-${user.id}`}
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0 11px',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                            }}
                        >
                            <h3>{user?.fullName}</h3>
                            <p>{user?.description}</p>
                            <a href={`https://en.wikipedia.org/wiki/${formattedFullName}`} target='_blank'
                               rel="noopener noreferrer">Read more</a>
                        </div>
                    );
                })
            ) : (
                <div>
                    Your search - <strong>{searchTerm}</strong> - did not match any results.
                </div>
            )}

        </div>
    );
};
