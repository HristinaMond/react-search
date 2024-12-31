import React from "react";
import {useSearchTime} from "./hooks";
import {useFilteredSearchResults} from "../SearchResults/hooks";

export const SearchTimeCompletionAndResults = () => {

    const { searchTime } = useSearchTime();
    const { filteredSearchResults } = useFilteredSearchResults(  )
    const numberOfFilteredSearchResults = filteredSearchResults?.length
    const formattedSearchTime = searchTime ? Number(searchTime.toFixed(2)) : 0;

    const formattedResults = `About ${numberOfFilteredSearchResults} result${numberOfFilteredSearchResults > 1 ? "s" : ""}`;

    return formattedSearchTime ? (
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
            <div>({formattedSearchTime} seconds)</div>
        </div>
    ) : null;
};
