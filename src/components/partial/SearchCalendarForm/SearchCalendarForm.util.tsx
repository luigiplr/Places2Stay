import { Text } from '#/components/base';
import { CalenderIcon } from '#/components/base/Icon';
import _ from 'lodash';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import styles from './SearchCalendarForm.styles';

const lengths = ['Weekend', 'Week', 'Month'];

export const FlexiblePicker = () => {
    const [selectedLength, setSelectedLength] = useState(0);
    const [months, setMonths] = useState<string[]>([]);

    const comingMonths = useMemo(() => {
        const _months = [];
        const dateStart = moment();
        const dateEnd = moment().add(12, 'month');
        while (dateEnd.diff(dateStart, 'months') >= 0) {
            _months.push({
                month: dateStart.format('MMMM'),
                year: dateStart.format('YYYY'),
            });
            dateStart.add(1, 'month');
        }
        return _months;
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textContaienr}>
                <Text>Stay for a </Text>
                <Text style={styles.bold}>
                    {lengths[selectedLength].toLocaleLowerCase()}
                </Text>
            </View>

            <View style={styles.lengths}>
                {lengths.map((length, index) => (
                    <TouchableOpacity
                        onPress={() => setSelectedLength(index)}
                        style={[
                            styles.length,
                            selectedLength === index && {
                                backgroundColor: 'white',
                            },
                        ]}>
                        <Text>{length}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.textContaienr}>
                <Text>Go in </Text>
                <Text style={styles.bold}>{months.join(', ')}</Text>
            </View>

            <ScrollView horizontal style={styles.months}>
                {comingMonths.map(({ month, year }) => (
                    <TouchableOpacity
                        style={[
                            styles.month,
                            months.includes(month) && {
                                backgroundColor: 'white',
                            },
                        ]}
                        onPress={() =>
                            setMonths(
                                !months.includes(month)
                                    ? [...months, month]
                                    : _.without(months, month),
                            )
                        }>
                        <CalenderIcon />

                        <Text style={styles.monthText}>{month}</Text>
                        <Text color="#8C8C8C">{year}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
