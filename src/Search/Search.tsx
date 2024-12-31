import {Text} from '@common/components/Text/Text';
import React from 'react';
import {SearchBar, Title} from './components';

export const Search = () => {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100vh',
                alignItems: 'flex-start',
                gap: '14px',
                maxWidth: '1024px',
            }}>


            <Title>
                <Text>Search X</Text>
            </Title>

            <SearchBar />


        </div>
    )
}
