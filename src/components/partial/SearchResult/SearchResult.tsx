import { Text } from '#/components/base';
import { SearchPinIcon } from '#/components/base/Icon';
import React from 'react';
import { View } from 'react-native';

import styles from './SearchResult.styles';

export default function SearchResult({
    children,
    text,
}: {
    children?: React.ReactNode;
    text?: string;
}) {
    return (
        <View style={styles.result}>
            <SearchPinIcon height="28" width="21" />
            {text ? <Text size={16}>{text}</Text> : null}
            {children}
        </View>
    );
}
