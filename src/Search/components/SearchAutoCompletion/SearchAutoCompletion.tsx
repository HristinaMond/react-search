import React from "react";
import { Option } from "@common/components/dropdowns/Dropdown/components/Options/components";
import { SearchIcon } from "@common/components/icons";
import {useSearch} from "../../../store/SearchContext.tsx";

type SearchAutoCompletionProps = {
    optionRef: React.Ref<HTMLDivElement>;
    searchTerm: string;
    data: any[];
    onClick?: (arg?: any) => void;
};

export const SearchAutoCompletion = ({optionRef, onClick}: SearchAutoCompletionProps) => {

    const { searchResults } = useSearch(); // Access filtered data from context

    return (
        <>
            {searchResults.length > 0 ? (
                searchResults.map((user: any) => (
                    <div
                        key={`search-results-${user.id}`}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "14px",
                            padding: "0 14px 0 20px",
                        }}
                    >
                        <SearchIcon
                            className={"icon--small"}
                            style={{
                                color: "#9aa0a6",
                            }}
                        />

                        <Option
                            ref={optionRef}
                            key={`search-result-${user.id}`}
                            onClick={onClick}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            {user?.fullName}
                        </Option>
                    </div>
                ))
            ) : <Option></Option>}
        </>
    );
};
