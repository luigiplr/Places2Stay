import Picker from '#/components/base/Picker';
import { View } from 'react-native';
import React, { useState } from 'react';
import styles from './SearchParticipantsForm.styles';
import { Props } from './SearchParticipantsForm.types';
import SearchWizardHeader from '../SearchWizardHeader';
import SearchFormCard from '../SearchFormCard';
import { useWizard } from 'react-use-wizard';
import _ from 'lodash';

const participantTypes = ['adults', 'children', 'infants', 'pets'];

export default function SearchParticipantsForm({ onSubmit, city }: Props) {
    const { previousStep } = useWizard();
    const [participants, updateParticipants] = useState<object>({})

    return (
        <>
            <SearchWizardHeader>What are you looking for?</SearchWizardHeader>

            <SearchFormCard title={city as string} onBackPress={previousStep}>
                <View>
                    {participantTypes.map(participant => (
                        <Picker
                            title={_.capitalize(participant)}
                            description="description"
                            onChange={(amount: number) => updateParticipants({
                                ...participants,
                                [participant]: amount
                            })}
                        />
                    ))}
                </View>
            </SearchFormCard>
        </>
    );
}
