import React from 'react';

import styles from './SearchPlaceExperienceTypeForm.styles';
import { Props } from './SearchPlaceExperienceTypeForm.types';
import SearchWizardHeader from '../SearchWizardHeader';
import SearchFormCard from '../SearchFormCard';
import { Text } from '#/components/base';
import { useWizard } from 'react-use-wizard';
import { Option } from './SearchPlaceExperienceTypeForm.util';

export default function SearchPlaceExperienceTypeForm({
    onSubmit,
    city,
}: Props) {
    const { previousStep } = useWizard();

    return (
        <>
            <SearchWizardHeader>What are you looking for?</SearchWizardHeader>

            <SearchFormCard title={city as string} onBackPress={previousStep}>
                <Option title="Find a place to stay" />
                <Option title="Find a monthly stay" />
                <Option title="Find an experience" />
            </SearchFormCard>
        </>
    );
}
