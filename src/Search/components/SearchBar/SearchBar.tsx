import React from 'react';
import {ButtonIcon, CloseIcon, Divider, Dropdown, Form, Input, SearchIcon} from '@common/components';
import {SearchRecentSearches} from '../SearchRecentSearches/SearchRecentSearches';
import {Options} from "@common/components/dropdowns/Dropdown/components";
import {SearchTimeCompletionAndResults} from "../SearchTimeCompletionAndResults/SearchTimeCompletionAndResults";
import {SearchAutoCompletion} from "../SearchAutoCompletion/SearchAutoCompletion";
import {SearchResults} from '../SearchResults/SearchResults';
import {useRecentSearches} from "../SearchRecentSearches/hooks";
import {useDropdown} from "@common/components/dropdowns/Dropdown/hooks";
import {useSearchFormSubmit} from "../SearchForm/hooks";
import {useSearch} from "../../../store/SearchContext.tsx";

export const SearchBar = () => {

    const {searchTerm, setSearchTerm, filterSearchResults} = useSearch();


    const {updateRecentSearches} = useRecentSearches();
    const {isDropdownOpen, setIsDropdownOpen, dropdownRef} = useDropdown();

    const {formRef, handleSearchFormSubmit} = useSearchFormSubmit();
    const searchInputRef = React.useRef<HTMLInputElement | null>(null);


    const handleSearchInputFocus = () => setIsDropdownOpen(true);

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // Update the search term
        filterSearchResults(); // Trigger the filtering
        if (event.target.value) {
            setShowResetButton(true)
        } else {
            setShowResetButton(false);
        }
    };

    const handleSearchInputBlur = () => {
        if (searchInputRef.current) {
            searchInputRef.current.style.borderRadius = '24px';
        }
    };

    const handleOptionSearchSubmit = () => {

        updateRecentSearches(searchTerm);

        setIsDropdownOpen(false);

        if (searchInputRef.current) {
            setSearchTerm(searchInputRef.current?.value)
        }

        formRef.current?.requestSubmit();

    };

    const handleOptionClick = (e: React.MouseEvent) => {
        if (searchInputRef.current) {
            const target = e.target as HTMLElement;
            searchInputRef.current.value = target.getAttribute('option-value') || "";
        }
        handleOptionSearchSubmit();
        setIsDropdownOpen(false);
    };

    const handleSearchButtonClick = () => {
        setIsDropdownOpen(false);
        setSearchTerm(searchInputRef.current?.value || "");
    };

    const handleResetButtonClick = () => {
        setIsDropdownOpen(true)
        searchInputRef.current?.focus()
    }

    const showSearchResults = !isDropdownOpen && searchTerm !== ''
    const [showResetButton, setShowResetButton] = React.useState(false);

    // Focus the input on page load
    React.useEffect(() => {
        if (searchInputRef && typeof searchInputRef !== 'function' && searchInputRef.current && searchTerm === '') {
            searchInputRef.current.focus();
        }
    }, [searchInputRef, searchTerm]);

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
                            className='dropdown__search-input'
                            onFocus={handleSearchInputFocus}
                            onBlur={handleSearchInputBlur}
                            onChange={handleSearchInputChange}
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
                            {showResetButton && (
                                <ButtonIcon
                                    modifier='secondary'
                                    type='reset'
                                    disabled={!searchInputRef.current}
                                    onClick={handleResetButtonClick}
                                >
                                    <CloseIcon/>
                                </ButtonIcon>
                            )
                            }

                            <Divider/>


                            <ButtonIcon
                                modifier='primary'
                                type='submit'
                                disabled={!searchInputRef.current}
                                onClick={handleSearchButtonClick}
                            >
                                <SearchIcon/>
                            </ButtonIcon>
                        </div>
                    </div>

                    {isDropdownOpen &&
                        <Options>

                            <SearchRecentSearches onClick={handleOptionClick}/>

                            <SearchAutoCompletion onClick={handleOptionClick}/>

                        </Options>}

                </Dropdown>


            </Form>

            <SearchTimeCompletionAndResults/>

            {showSearchResults && <SearchResults searchTerm={searchTerm}/>}
        </>
    )
}
