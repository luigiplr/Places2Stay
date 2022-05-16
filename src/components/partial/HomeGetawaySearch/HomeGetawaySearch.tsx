import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './HomeGetawaySearch.styles';

export default function HomeGetawaySearch({ style }: { style?: object }) {
    return (
        <View style={style}>
            <TextInput style={styles.textbox} placeholder="Try 'Boston'" />
        </View>
    );
}
