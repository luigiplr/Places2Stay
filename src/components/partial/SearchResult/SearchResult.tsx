import { Text, Icon } from '#/components/base';
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
            <Icon.SearchPinIcon height="28" width="21" style={styles.icon} />
            {text ? <Text size={16}>{text}</Text> : null}
            {children}
        </View>
    );
}
