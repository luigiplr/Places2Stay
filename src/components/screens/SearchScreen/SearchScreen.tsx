import SearchWizard from '#/components/partial/SearchWizard';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './SearchScreen.styles';
import { getaways } from '../HomeScreen/mock_data';
import HomeGetawayItem from '#/components/partial/HomeGetawayItem';
import { Text } from '#/components/base';
import { ScrollView } from 'react-native-gesture-handler';
import ModernSearch from '#/components/partial/ModernSearch';
import useSetting from '#/hooks/useSetting';

export default function SearchScreen() {
    const [appTheme] = useSetting('app.theme');

    const [showResultsCity, updateResultsShown] = useState<string | boolean>(
        false,
    );

    if (appTheme === 'greatnotgood') {
        return <ModernSearch getaways={getaways} />;
    }

    return (
        <SafeAreaView style={styles.contain}>
            {showResultsCity ? (
                <View style={{ paddingHorizontal: 54 }}>
                    <View style={{ paddingVertical: 35 }}>
                        <Text
                            varient="header"
                            size={20}
                            style={{ marginBottom: 10 }}>
                            +250 Places in {showResultsCity}
                        </Text>

                        <Text>
                            Our spaces are designed for comfort - whether you
                            are working, relaxing, or craving some spaces
                        </Text>
                    </View>

                    <ScrollView>
                        {getaways.map((item, index) => (
                            <HomeGetawayItem {...item} key={index} />
                        ))}
                    </ScrollView>
                </View>
            ) : (
                <SearchWizard showResultsToggle={updateResultsShown} />
            )}
        </SafeAreaView>
    );
}
