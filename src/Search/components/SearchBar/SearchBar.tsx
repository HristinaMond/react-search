import React from 'react';
import {CloseIcon, Divider, Dropdown, Form, Input, SearchIcon} from '@common/components';
import {ButtonIcon} from '@common/components';
import {SearchRecentSearches} from '../SearchRecentSearches/SearchRecentSearches';
import {Options} from "@common/components/dropdowns/Dropdown/components";
import {SearchTimeCompletionAndResults} from "../SearchTimeCompletionAndResults/SearchTimeCompletionAndResults";
import {SearchAutoCompletion} from "../SearchAutoCompletion/SearchAutoCompletion";
import {SearchResults} from '../SearchResults/SearchResults';
import {useSearchAutoCompletion} from "../SearchAutoCompletion/hooks";
import {useSearchTime} from "../SearchTimeCompletionAndResults/hooks";
import {useRecentSearches} from "../SearchRecentSearches/hooks";
import {useDropdown} from "@common/components/dropdowns/Dropdown/hooks";
import {useSearchFormSubmit} from "../SearchForm/hooks";
import {useSearch} from "../../../store/SearchContext.tsx";

export const SearchBar = () => {

    const {searchTerm, setSearchTerm, filterSearchResults} = useSearch();


    const {updateRecentSearches} = useRecentSearches();
    const {searchAutoCompletion} = useSearchAutoCompletion(searchTerm);
    const {isDropdownOpen, setIsDropdownOpen, dropdownRef} = useDropdown();
    const {formRef, handleSearchFormSubmit} = useSearchFormSubmit();
    const {measureSearchTime} = useSearchTime();

    const searchInputRef = React.useRef<HTMLInputElement | null>(null);
    const optionRef = React.useRef<HTMLInputElement | null>(null);


    const handleSearchFocus = () => setIsDropdownOpen(true);

    const handleOptionSearchSubmit = () => {

        const startTime = Number(performance.now());
        updateRecentSearches(searchTerm);

        measureSearchTime(startTime);

        setIsDropdownOpen(false);

        //@ts-ignore
        setSearchTerm(searchInputRef.current?.value)

        //@ts-ignore
        formRef.current?.requestSubmit();

    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // Update the search term
        filterSearchResults(); // Trigger the filtering
    };


   const showSearchResults = !isDropdownOpen;

    return (
        <>
            <Form
                ref={formRef}
                onSubmit={(e) => {
                    handleSearchFormSubmit(e)
                    searchInputRef.current?.blur();
                }}
            >

                <Dropdown
                    ref={dropdownRef}
                >

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Input
                            //@ts-ignore
                            ref={searchInputRef}
                            name='search'
                            type='text'
                            id="searchInput"
                            className='dropdown-search'
                            onFocus={handleSearchFocus}
                            onChange={handleSearchChange}
                            style={{
                                flexGrow: 1
                            }}
                        />

                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                                gap: '11px',
                                position: 'absolute',
                                top: '5px',
                                right: '10px',
                                zIndex: 9999,
                            }}
                        >
                            <ButtonIcon
                                modifier='secondary'
                                type='reset'
                                disabled={!searchInputRef.current}
                                onClick={() => {
                                    setIsDropdownOpen(true)
                                    searchInputRef.current?.focus()
                                }}
                            >
                                <CloseIcon/>
                            </ButtonIcon>

                            <Divider />


                            <ButtonIcon
                                modifier='primary'
                                type='submit'
                                disabled={!searchInputRef.current}
                                onClick={() => {
                                    setIsDropdownOpen(false)
                                    setSearchTerm(searchInputRef.current?.value)
                                }}
                            >
                                <SearchIcon/>
                            </ButtonIcon>
                        </div>
                    </div>

                    {isDropdownOpen &&
                        <Options>

                            <SearchRecentSearches
                                optionRef={optionRef}
                                onClick={(e) => {

                                    //@ts-ignore
                                    searchInputRef.current.value = e?.target?.innerText
                                    handleOptionSearchSubmit()
                                    setIsDropdownOpen(false)
                                }
                                }
                            />

                            <SearchAutoCompletion
                                optionRef={optionRef}
                                data={searchAutoCompletion}
                                searchTerm={searchTerm}
                                onClick={(e) => {
                                    //@ts-ignore
                                    searchInputRef.current.value = e?.target?.innerText
                                    handleOptionSearchSubmit()
                                }}
                            />

                        </Options>}

                </Dropdown>


            </Form>

            <SearchTimeCompletionAndResults/>

            {showSearchResults && <SearchResults searchTerm={searchTerm}/>}
        </>
    )
}
