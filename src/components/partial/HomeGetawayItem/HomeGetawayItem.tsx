import { Text } from '#/components/base';
import React from 'react';
import { View, Image } from 'react-native';

import styles from './HomeGetawayItem.styles';

import type { GetawayItem } from './HomeGetawayItem.types';

export default function HomeGetawayItem({
    price,
    address,
    beds,
    city,
    image,
}: GetawayItem) {
    return (
        <View style={styles.wrap}>
            <View style={styles.imageContain}>
                <View style={styles.priceContain}>
                    <Text center>From ${price}</Text>
                </View>
                <Image source={{ uri: image }} style={styles.image} />
            </View>

            <Text>
                {address} | {beds} Br
            </Text>

            <Text color="#858585" style={styles.cityText}>
                {city}
            </Text>
        </View>
    );
}
