import React from "react";
import {useSearch} from "../../../store/SearchContext.tsx";

export const SearchTimeCompletionAndResults = () => {

    const {searchTime} = useSearch();
    const { searchResults } = useSearch( )
    const numberOfFilteredSearchResults = searchResults?.length

    const formattedResults = `About ${numberOfFilteredSearchResults} result${numberOfFilteredSearchResults > 1 ? "s" : ""}`;

    return  (
        <div
            style={{
                display: "flex",
                alignSelf: "flex-end",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#5e5e5e",
                gap: 4,
            }}
        >
            <div>{formattedResults}</div>
            <div>({searchTime} milliseconds)</div>
        </div>
    )
};
