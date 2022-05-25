import React from 'react';
import { Text, Icon } from '#/components/base';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './HomeExperienceItem.styles';
import type { Props } from './HomeExperienceItem.types';

import layout from '#/styles/layout';
import { SharedElement } from 'react-navigation-shared-element';

export default function HomeExperienceItem({ image, title, style, id }: Props) {
    const navigation = useNavigation();

    return (
        <>
            <SharedElement id={`body-${id}`}>
                <View style={[{ backgroundColor: 'white' }, style]}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Stay', { id, title })
                        }>
                        <SharedElement id={`stay-image-${id}`}>
                            <Image
                                source={{ uri: image }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </SharedElement>
                    </TouchableOpacity>

                    <Text style={styles.title} bold>
                        {title}
                    </Text>

                    <View style={[layout.flexHorizontal, styles.meta]}>
                        <View style={layout.flexGrow}>
                            <Text color="#A0A0A0">Montreal</Text>
                        </View>

                        <View style={[layout.flexHorizontal, { flexGrow: 0 }]}>
                            <SharedElement id={`stay-rating-${id}`}>
                                <View>
                                    <Icon.FeatherStarIcon
                                        width="15"
                                        height="15"
                                        color="#F3B13C"
                                    />
                                </View>
                            </SharedElement>

                            <Text color="#A0A0A0" style={{ marginLeft: 4 }}>
                                4.8
                            </Text>
                        </View>
                    </View>
                </View>
            </SharedElement>
        </>
    );
}
