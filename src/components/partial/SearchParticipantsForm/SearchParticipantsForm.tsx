import Picker from '#/components/base/Picker';
import React, { useState } from 'react';
import { Props } from './SearchParticipantsForm.types';
import SearchWizardHeader from '../SearchWizardHeader';
import SearchFormCard from '../SearchFormCard';
import { useWizard } from 'react-use-wizard';
import _ from 'lodash';

const participantTypes = ['adults', 'children', 'infants', 'pets'];

export default function SearchParticipantsForm({ city, onComplete }: Props) {
    const { previousStep } = useWizard();
    const [participants, updateParticipants] = useState<object>({});

    return (
        <>
            <SearchWizardHeader>What are you looking for?</SearchWizardHeader>

            <SearchFormCard
                title={city as string}
                onBackPress={previousStep}
                nextStepText="Find Places"
                onNextPress={onComplete}>
                {participantTypes.map(participant => (
                    <Picker
                        title={_.capitalize(participant)}
                        description="description"
                        onChange={(amount: number) =>
                            updateParticipants({
                                ...participants,
                                [participant]: amount,
                            })
                        }
                    />
                ))}
            </SearchFormCard>
        </>
    );
}
