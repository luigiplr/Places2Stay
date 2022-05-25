import React from 'react';
import { Text } from '#/components/base';
import { View } from 'react-native';

import styles from './StayHeader.styles';
import layout from '#/styles/layout';
import useSetting from '#/hooks/useSetting';
import { StayHeaderProps } from './StayHeader.types';
import { SharedElement } from 'react-navigation-shared-element';

export default function StayHeader({
    title,
    titleShort,
    location,
    dates,
    price,
    id,
}: StayHeaderProps) {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';

    if (appTheme === 'greatnotgood') {
        return (
            <SharedElement id={`body-${id}`}>
                <View style={[layout.flexGrow, styles.content, styles.card]}>
                    <View
                        style={[
                            layout.flexHorizontal,
                            { justifyContent: 'space-between' },
                        ]}>
                        <Text varient="header">{titleShort}</Text>
                        <Text varient="header">${price}</Text>
                    </View>

                    <View>
                        <Text
                            style={[
                                styles.meta,
                                { position: 'absolute', right: 0 },
                            ]}
                            color="#858585">
                            per person
                        </Text>

                        <View
                            style={[
                                styles.meta,
                                layout.flexHorizontal,
                                {
                                    width: '55%',
                                    justifyContent: 'space-between',
                                },
                            ]}>
                            <Text color="#858585">2 guests</Text>
                            <Text color="#858585">1 bedroom</Text>
                            <Text color="#858585">1 bath</Text>
                        </View>
                    </View>
                </View>
            </SharedElement>
        );
    }

    return (
        <>
            <Text varient="header">{title}</Text>
            <Text style={[styles.meta, { marginTop: 8 }]}>{location}</Text>
            <Text style={[styles.meta, { marginTop: 8 }]}>{dates}</Text>
        </>
    );
}
