import styles from './Card.styles';
import React from 'react';
import { View } from 'react-native';

export default function Card({ style, children }: CardProps) {
    return <View style={[style, styles.card]}>{children}</View>;
}

export type CardProps = {
    style?: object;
    children: React.ReactElement;
};
