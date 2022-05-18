import { BackIcon } from '#/components/base/Icon';
import HomeGetawaySearch from '#/components/partial/HomeGetawaySearch';
import SearchResult from '#/components/partial/SearchResult';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SearchScreen.styles';
import searchMockData from './mockData';
import { Props } from './SearchScreen.types';

export default function SearchScreen({ navigation }: Props) {
    const [searchInput, onSearchInput] = useState<string>('');
    const [searchResult, onSearchResult] = useState<string[]>([]);

    useEffect(() => {
        const citySearchResult = searchMockData.cities.filter(label =>
            label.toLowerCase().includes(searchInput.toLowerCase()),
        );
        onSearchResult(citySearchResult);
    }, [searchInput]);

    return (
        <SafeAreaView style={styles.contain}>
            <View style={styles.header}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon width="24" height="24" />
                    </TouchableOpacity>
                </View>

                <HomeGetawaySearch
                    placeholder="Where are you going?"
                    style={styles.input}
                    onChangeText={text => onSearchInput(text)}
                />
            </View>

            <View style={styles.searchResults}>
                {searchResult.map(label => (
                    <SearchResult text={label} key={label} />
                ))}
            </View>
        </SafeAreaView>
    );
}
