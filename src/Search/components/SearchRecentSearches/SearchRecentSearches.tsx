import React, {HTMLAttributes, Ref} from 'react';
import {Option} from '@common/components/dropdowns/Dropdown/components/Options/components';
import {Button} from '@common/components';
import {HistoryIcon} from '@common/components/icons';
import {useRecentSearches} from "./hooks";
import {useSearch} from "../../../store/SearchContext.tsx";

type SearchRecentSearchesProps = HTMLAttributes<HTMLDivElement>

export const SearchRecentSearches = ({ onClick }: SearchRecentSearchesProps) => {

    const {recentSearches, removeSearch} = useRecentSearches()
    const {searchTerm} = useSearch()

    const recentSearchesReducedByFive = recentSearches.slice(0, 5);
    const hasRecentSearches = recentSearches && recentSearches?.length > 0;

    const filteredByFirstLetter = searchTerm && hasRecentSearches && recentSearchesReducedByFive.filter(item =>
        item.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    const hasFilteredByFirstLetter = filteredByFirstLetter && filteredByFirstLetter.length > 0;
    const showFilteredByFirstLetter = searchTerm !== '' && hasFilteredByFirstLetter

    // show recent searches filtered by letter or all recent searches
    const formattedRecentSearches = showFilteredByFirstLetter ? filteredByFirstLetter : recentSearches

    return (
        <>
            {hasRecentSearches  ? formattedRecentSearches.map((data: string, index: number) => (
                <div
                    key={`search-recent-searches-${index}`}
                    className='dropdown__item'
                >
                    <HistoryIcon
                        className={'icon--small'}
                        style={{
                            color: '#9aa0a6',
                        }}
                        onClick={onClick}
                    />
                    <Option
                        key={`recent-search-${data}-${index}`}
                        option-value={data}
                        onClick={onClick}
                        style={{
                            width: '100%',
                            textAlign: 'left'
                        }}
                    >
                        {data}
                    </Option>
                    <Button
                        type='reset'
                        onClick={() => {
                            removeSearch(data);
                        }}
                        style={{
                            border: 'none',
                            background: 'none',
                            height: 'fit-content'
                        }}
                    >
                        Remove
                    </Button>
                </div>
            )): null}
        </>
    );
};
