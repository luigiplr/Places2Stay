import SearchWizard from '#/components/partial/SearchWizard';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './SearchScreen.styles';
import { getaways } from '../HomeScreen/mock_data';
import HomeGetawayItem from '#/components/partial/HomeGetawayItem';
import { Text } from '#/components/base';

export default function SearchScreen() {
    const [showResultsCity, updateResultsShown] = useState<string | boolean>(
        false,
    );

    return (
        <SafeAreaView style={styles.contain}>
            {showResultsCity ? (
                <View style={{ paddingHorizontal: 54 }}>
                    <Text varient="header" size={20}>
                        +250 Places in Toronto
                    </Text>

                    {getaways.map((item, index) => (
                        <HomeGetawayItem {...item} key={index} />
                    ))}
                </View>
            ) : (
                <SearchWizard showResultsToggle={updateResultsShown} />
            )}
        </SafeAreaView>
    );
}
