import { Icon } from '#/components/base';
import HomeGetawaySearch from '#/components/partial/HomeGetawaySearch';
import SearchResult from '#/components/partial/SearchResult';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useWizard } from 'react-use-wizard';
import searchMockData from './mockData';

import styles from './SearchPlaceForm.styles';
import { Props } from './SearchPlaceForm.types';

export default function SearchPlaceForm({ onSubmit }: Props) {
    const navigation = useNavigation();
    const { nextStep } = useWizard();
    const [searchInput, onSearchInput] = useState<string>('');
    const [searchResult, onSearchResult] = useState<string[]>([]);

    useEffect(() => {
        onSearchResult(
            searchMockData.cities.filter(label =>
                label.toLowerCase().includes(searchInput.toLowerCase()),
            ),
        );
    }, [searchInput]);

    const onCityClick = useCallback(
        (city: string) => {
            onSubmit({ city });
            nextStep();
        },
        [onSubmit, nextStep],
    );

    return (
        <>
            <View style={styles.header}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon.BackIcon width="24" height="24" />
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
                    <SearchResult
                        text={label}
                        key={label}
                        onPress={() => onCityClick(label)}
                    />
                ))}
            </View>
        </>
    );
}
