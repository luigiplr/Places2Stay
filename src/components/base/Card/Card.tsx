import styles from './Card.styles';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export default function Card({
    style,
    children,
}: {
    style?: StyleProp<ViewStyle>;
    children: React.ReactElement;
}) {
    return <View style={[style, styles.card]}>{children}</View>;
}
