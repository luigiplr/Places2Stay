import React from 'react';
import { Text } from '#/components/base';
import { View, Image } from 'react-native';

import styles from './HomeCityItem.styles';
import type { Props } from './HomeCityItem.types';
import useSetting from '#/hooks/useSetting';

export default function HomeCityItem({ image, title, style }: Props) {
    const [appTheme] = useSetting('app.theme');

    return (
        <View style={style}>
            <Image
                source={{ uri: image }}
                style={
                    styles[
                        `image.${appTheme as 'lighthouselabs' | 'greatnotgood'}`
                    ]
                }
            />
            <Text
                center={appTheme === 'greatnotgood'}
                bold={appTheme === 'greatnotgood'}>
                {title}
            </Text>
        </View>
    );
}
