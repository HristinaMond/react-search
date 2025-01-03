import React, {HTMLAttributes} from "react";
import {Option} from "@common/components/dropdowns/Dropdown/components/Options/components";
import {SearchIcon} from "@common/components/icons";
import {useSearch} from "../../../store/SearchContext.tsx";
import { InfluentialPerson} from "../../search-dummy-data";

type SearchAutoCompletionProps = HTMLAttributes<HTMLDivElement>;

export const SearchAutoCompletion = ({ onClick }: SearchAutoCompletionProps) => {

    const {searchResults} = useSearch();
    const {searchTerm} = useSearch();
    const hasSearchResults = searchResults && searchResults.length > 0;

    const searchResultsReducedByFive = hasSearchResults ? searchResults.slice(0, 5) : []
    const filteredByFirstLetter = searchTerm && hasSearchResults && searchResultsReducedByFive.filter(person =>
         person.fullName.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const hasFilteredByFirstLetter = filteredByFirstLetter && filteredByFirstLetter.length > 0;

    return (
        <>
            {hasFilteredByFirstLetter && searchTerm !== '' ? filteredByFirstLetter.map((user: InfluentialPerson) => (
                    <div
                        key={`search-results-${user?.fullName}-${user.id}`}
                        className='dropdown__item'
                    >
                        <SearchIcon
                            className={"icon--small"}
                            style={{
                                color: "#9aa0a6",
                            }}
                        />

                        <Option
                            option-value={user?.fullName}
                            onClick={onClick}
                            style={{
                                width: '100%',
                                textAlign: 'left'
                            }}
                        >
                            {user?.fullName}
                        </Option>
                    </div>
                )
            ) : null}
        </>
    );
};
