import { BackIcon } from '#/components/base/Icon';
import HomeGetawaySearch from '#/components/partial/HomeGetawaySearch';
import SearchResult from '#/components/partial/SearchResult';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

            <View style={styles.searchResults}>
                <SearchResult text='Toronto' />
                <SearchResult text='Boston' />
                <SearchResult text='Calgary' />
                <SearchResult text='Houstan' />
                <SearchResult text='Seattle' />
            </View>
        </SafeAreaView>
    );
}
