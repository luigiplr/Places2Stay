import { Text } from '#/components/base';
import React, { useCallback } from 'react';
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
}: GetawayItem) {
    const navigation = useNavigation();

    const onPress = useCallback(() => {
        navigation.navigate('Stay');
    }, [navigation]);

    return (
        <View style={styles.wrap}>
            <TouchableOpacity style={styles.imageContain} onPress={onPress}>
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
