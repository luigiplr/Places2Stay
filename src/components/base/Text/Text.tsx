import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';
import capitalize from 'capitalize';

import type { TextProps } from './Text.types';

import styles from './Text.styles';

export default function Text({
    children,
    varient = 'body',
    style,
    color = '#000000',
    center,
    capitalize: capitalizeProp,
    size,
    bold
}: TextProps) {
    const body = useMemo(() => {
        if (capitalizeProp && typeof children === 'string') {
            return capitalize.words(children);
        }

        return children;
    }, [children, capitalizeProp]);

    return (
        <RNText
            style={[
                styles?.[varient],
                center && styles.center,
                bold && styles.bold,
                typeof size === 'number' ? { fontSize: size } : undefined,
                { color },
                style,
            ]}>
            {body}
        </RNText>
    );
}
