import React from 'react';
import { Text as RNText } from 'react-native';

import type { TextProps } from './Text.types';

import styles from './Text.styles';

export default function Text({
    children,
    varient = 'body',
    style,
    color = '#000000',
    center,
}: TextProps) {
    return (
        <RNText
            style={[
                styles?.[varient],
                center && styles.center,
                { color },
                style,
            ]}>
            {children}
        </RNText>
    );
}
