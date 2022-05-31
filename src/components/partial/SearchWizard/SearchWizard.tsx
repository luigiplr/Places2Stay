import { Wizard } from 'react-use-wizard';
import React, { useCallback, useState } from 'react';
import SearchPlaceForm from '../SearchPlaceForm';
import SearchPlaceExperienceTypeForm from '../SearchPlaceExperienceTypeForm/SearchPlaceExperienceTypeForm';
import SearchCalForm from '../SearchCalForm';

export default function SearchWizard() {
    const [data, updateData] = useState({});

    const onSubmit = useCallback(
        (newData: object) => {
            updateData({ ...data, ...newData });
        },
        [data],
    );

    return (
        <Wizard>
            <SearchPlaceForm onSubmit={onSubmit} />
            <SearchPlaceExperienceTypeForm
                onSubmit={onSubmit}
                city={data?.city}
            />
            <SearchCalForm onSubmit={onSubmit} city={data?.city} />
        </Wizard>
    );
}
