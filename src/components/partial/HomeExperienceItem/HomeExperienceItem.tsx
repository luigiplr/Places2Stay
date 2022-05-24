import React from 'react';
import { Text } from '#/components/base';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './HomeExperienceItem.styles';
import type { Props } from './HomeExperienceItem.types';

import layout from '#/styles/layout';
import Icon from 'react-native-vector-icons/Feather';

export default function HomeExperienceItem({ image, title, style }: Props) {
    const navigation = useNavigation();

    return (
        <View style={style}>
            <TouchableOpacity onPress={() => navigation.navigate('Stay')}>
                <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>

            <Text style={styles.title} bold>
                {title}
            </Text>

            <View style={[layout.flexHorizontal, styles.meta]}>
                <View style={layout.flexGrow}>
                    <Text color="#A0A0A0">Montreal</Text>
                </View>

                <View style={[layout.flexHorizontal, { flexGrow: 0 }]}>
                    <Icon name="star" size={15} color="#F3B13C" />
                    <Text color="#A0A0A0" style={{ marginLeft: 4 }}>
                        4.8
                    </Text>
                </View>
            </View>
        </View>
    );
}
