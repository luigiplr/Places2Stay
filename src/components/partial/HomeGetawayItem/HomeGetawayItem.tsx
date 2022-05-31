import { Text } from '#/components/base';
import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './HomeGetawayItem.styles';

import type { GetawayItem } from './HomeGetawayItem.types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeGetawayItem({
    price,
    address,
    beds,
    city,
    image,
    style,
}: GetawayItem) {
    const navigation = useNavigation();

    return (
        <View style={[styles.wrap, style]}>
            <TouchableOpacity
                style={styles.imageContain}
                onPress={() => navigation.navigate('Stay')}>
                <View style={styles.priceContain}>
                    <Text center>From ${price}</Text>
                </View>
                <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>

            <Text>
                {address} | {beds} Br
            </Text>

            <Text color="#858585" style={styles.cityText}>
                {city}
            </Text>
        </View>
    );
}
