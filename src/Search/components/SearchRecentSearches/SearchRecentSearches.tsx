import React, {Ref} from 'react';
import {Option} from '@common/components/dropdowns/Dropdown/components/Options/components';
import {Button} from '@common/components';
import {HistoryIcon} from '@common/components/icons';
import {useRecentSearches} from "./hooks";

type SearchRecentSearchesProps = {
    optionRef?: Ref<HTMLDivElement>;
    onClick?: (arg?: any) => void;
};

export const SearchRecentSearches = ({optionRef, onClick}: SearchRecentSearchesProps) => {

    const { recentSearches, removeSearch } = useRecentSearches()

    const recentSearchesReducedByFive = recentSearches.slice(0, 5);
    const hasRecentSearches = recentSearchesReducedByFive.length > 0;


    return (
        <>
            {hasRecentSearches ?  recentSearchesReducedByFive.map((data: string, index: number) => (
                <div
                    key={`search-recent-searches-${index}`}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '14px',
                        padding: '0 14px 0 20px'
                    }}
                >
                    <HistoryIcon
                        className={'icon--small'}
                        style={{
                            color: '#9aa0a6',
                        }}
                    />
                    <Option
                        ref={optionRef}
                        key={`recent-search-${data}-${index}`}
                        onClick={onClick}
                    >
                        {data}
                    </Option>
                    <Button
                        onClick={() => removeSearch(data)}
                        style={{
                            border: 'none',
                            background: 'none'
                        }}
                    >
                        Remove
                    </Button>
                </div>
            )): <Option></Option>}
        </>
    );
};
