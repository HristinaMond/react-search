import React from 'react';
import { influentialPeople } from '../../../search-dummy-data';

export const useSearchAutoCompletion = (searchTerm: string) => {
    const [searchAutoCompletion, setSearchAutoCompletion] = React.useState<any>([]);

    React.useEffect(() => {
        setSearchAutoCompletion(
            influentialPeople?.filter((influentialPerson) => {
                    return influentialPerson?.fullName?.includes(searchTerm);
                }
            )
        );
    }, [searchTerm]);

    return { searchAutoCompletion };
};
