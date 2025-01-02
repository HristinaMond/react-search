import React, {HTMLAttributes} from "react";
import {Option} from "@common/components/dropdowns/Dropdown/components/Options/components";
import {SearchIcon} from "@common/components/icons";
import {useSearch} from "../../../store/SearchContext.tsx";
import {InfluentialPerson} from "../../search-dummy-data";

type SearchAutoCompletionProps = HTMLAttributes<HTMLDivElement>;

export const SearchAutoCompletion = ({ onClick }: SearchAutoCompletionProps) => {

    const {searchResults} = useSearch();
    const {searchTerm} = useSearch();
    const hasSearchResults = searchResults && searchResults.length > 0;

    return (
        <>
            {hasSearchResults && searchTerm !== '' ? searchResults.map((user: InfluentialPerson) => (
                    <div
                        key={`search-results-${user.id}`}
                        className='dropdown-item'
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
