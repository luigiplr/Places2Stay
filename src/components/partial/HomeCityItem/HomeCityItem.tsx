import React from 'react';
import { Text } from '#/components/base';
import { View, Image } from 'react-native';

import styles from './HomeCityItem.styles';
import type { Props } from './HomeCityItem.types';

export default function HomeCityItem({ image, title, style }: Props) {
    return (
        <View style={style}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text>{title}</Text>
        </View>
    );
}
