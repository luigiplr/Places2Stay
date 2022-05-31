import React, { useCallback, useMemo, useState } from 'react';

import { Props } from './SearchCalForm.types';
import SearchWizardHeader from '../SearchWizardHeader';
import SearchFormCard from '../SearchFormCard';
import { Text, Toggle } from '#/components/base';
import { useWizard } from 'react-use-wizard';
import { View, Dimensions } from 'react-native';
import layout from '#/styles/layout';
import { CalendarList } from 'react-native-calendars';
import { FlexiblePicker } from './SearchCalForm.util';

import styles from './SearchCalForm.styles';

export default function SearchCalForm({ city }: Props) {
    const { previousStep } = useWizard();

    const minDate = useMemo(() => new Date().toISOString(), []);
    const width = Dimensions.get('window').width;
    const [selected, setSelected] = useState(0);

    const [markedDates, setMarkedDates] = useState({});

    const onToggle = useCallback((index: number) => setSelected(index), []);

    const onDateSelect = ({ dateString }: { dateString: string }) => {
        const dates = Object.keys(markedDates);

        if (dates.length !== 1) {
            setMarkedDates({
                [dateString]: {
                    startingDay: true,
                    endingDay: true,
                    color: '#4169E1',
                    textColor: 'white',
                },
            });
        } else {
            const firstDate = new Date(dates[0]);
            const secondDate = new Date(dateString);

            const [startDate, endDate] =
                firstDate < secondDate
                    ? [firstDate, secondDate]
                    : [secondDate, firstDate];

            let newMarkedDates = {};

            for (
                let date = new Date(startDate);
                date <= endDate;
                date.setDate(date.getDate() + 1)
            ) {
                const currentDateString = date.toISOString().substring(0, 10);
                const isStartDay = date.getDate() === startDate.getDate();
                const isEndDay = date.getDate() === endDate.getDate();

                newMarkedDates[currentDateString] = {
                    startingDay: isStartDay,
                    endingDay: isEndDay,
                    color:
                        isStartDay || isEndDay
                            ? '#4169E1'
                            : 'rgb(173, 216, 230)',
                    textColor: isStartDay || isEndDay ? '#fff' : '#000',
                };
            }

            setMarkedDates(newMarkedDates);
        }
    };

    return (
        <>
            <SearchWizardHeader>What are you looking for?</SearchWizardHeader>

            <SearchFormCard title={city as string} onBackPress={previousStep}>
                <View style={styles.container}>
                    <View style={[layout.centerHorizontal]}>
                        <Toggle
                            values={['Calendar', "I'm flexible"]}
                            onToggle={onToggle}
                        />
                    </View>

                    {selected === 0 ? (
                        <CalendarList
                            style={{ width: width - 70 }}
                            onDayPress={onDateSelect}
                            minDate={minDate}
                            markingType={'period'}
                            markedDates={markedDates}
                            pastScrollRange={0}
                        />
                    ) : (
                        <FlexiblePicker />
                    )}
                </View>
            </SearchFormCard>
        </>
    );
}
