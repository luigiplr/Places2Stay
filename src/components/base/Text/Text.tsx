import React, { useMemo } from 'react';
import { Text as RNText } from 'react-native';
import capitalize from 'capitalize';

import type { TextProps } from './Text.types';
import _ from 'lodash';

import styles from './Text.styles';
import useSetting from '#/hooks/useSetting';

import themes from '#/styles/themes';

export default function Text({
    children,
    varient = 'body',
    style,
    color = '#000000',
    center,
    capitalize: capitalizeProp,
    size,
    bold,
}: TextProps) {
    const [appTheme] = useSetting('app.theme');

    const varientCap = useMemo(
        () => _.capitalize(varient) as 'Body' | 'Header',
        [varient],
    );

    const body = useMemo(() => {
        if (capitalizeProp && typeof children === 'string') {
            return capitalize.words(children);
        }

        return children;
    }, [children, capitalizeProp]);

    return (
        <RNText
            style={[
                themes?.[appTheme as 'lighthouselabs' | 'greatnotgood']?.[
                    `text${varientCap}`
                ],
                bold &&
                    themes?.[appTheme as 'lighthouselabs' | 'greatnotgood']?.[
                        `text${varientCap}Bold`
                    ],
                center && styles.center,
                typeof size === 'number' ? { fontSize: size } : undefined,
                { color },
                style,
            ]}>
            {body}
        </RNText>
    );
}
