import { Text, Icon } from '#/components/base';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './SearchResult.styles';

export default function SearchResult({
    children,
    text,
    onPress,
}: {
    children?: React.ReactNode;
    text?: string;
    onPress?: () => void;
}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.result}>
                <Icon.SearchPinIcon
                    height="28"
                    width="21"
                    style={styles.icon}
                />
                {text ? <Text size={16}>{text}</Text> : null}
                {children}
            </View>
        </TouchableOpacity>
    );
}
