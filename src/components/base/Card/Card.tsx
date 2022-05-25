import styles from './Card.styles';
import React from 'react';
import { View } from 'react-native';

export default function Card({
    style,
    children,
}: {
    style?: object;
    children: React.ReactElement;
}) {
    return <View style={[style, styles.card]}>{children}</View>;
}
