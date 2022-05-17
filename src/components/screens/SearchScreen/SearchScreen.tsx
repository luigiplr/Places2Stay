import { BackIcon } from '#/components/base/Icon';
import HomeGetawaySearch from '#/components/partial/HomeGetawaySearch';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SearchScreen.styles';

export default function SearchScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.contain}>
            <View style={styles.header}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon width="24" height="24" />
                    </TouchableOpacity>
                </View>

                <HomeGetawaySearch placeholder="Where are you going?" />
            </View>
        </SafeAreaView>
    );
}
