import { Wizard } from 'react-use-wizard';
import React, { useCallback, useState } from 'react';
import SearchPlaceForm from '../SearchPlaceForm';
import SearchPlaceExperienceTypeForm from '../SearchPlaceExperienceTypeForm/SearchPlaceExperienceTypeForm';
import SearchCalForm from '../SearchCalForm';
import SearchParticipantsForm from '../SearchParticipantsForm';
import { Props } from './SearchWizard.types';

export default function SearchWizard({ showResultsToggle }: Props) {
    const [data, updateData] = useState({});

    const onSubmit = useCallback(
        (newData: object) => {
            updateData({ ...data, ...newData });
        },
        [data],
    );

    const onComplete = useCallback(() => {
        showResultsToggle(data?.city);
    }, [data, showResultsToggle]);

    return (
        <Wizard>
            <SearchPlaceForm onSubmit={onSubmit} />
            <SearchPlaceExperienceTypeForm
                onSubmit={onSubmit}
                city={data?.city}
            />
            <SearchCalForm onSubmit={onSubmit} city={data?.city} />
            <SearchParticipantsForm
                onSubmit={onSubmit}
                city={data?.city}
                onComplete={onComplete}
            />
        </Wizard>
    );
}
