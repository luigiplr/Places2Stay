import SearchWizard from '#/components/partial/SearchWizard';
import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './SearchScreen.styles';

export default function SearchScreen() {
    return (
        <SafeAreaView style={styles.contain}>
            <SearchWizard />
        </SafeAreaView>
    );
}
