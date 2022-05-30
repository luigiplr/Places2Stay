import React, { useMemo } from 'react';
import { Image } from 'react-native';

import styles from './StayImage.styles';

import Carousel from 'react-native-snap-carousel';
import useSetting from '#/hooks/useSetting';
import { Dimensions } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

export default function StayImage({
    data,
    id,
}: {
    data: string[];
    id?: string;
}) {
    const [appTheme] = useSetting('app.theme');
    const dimensions = useMemo(() => Dimensions.get('window'), []);

    if (appTheme === 'greatnotgood') {
        return (
            <Carousel
                data={data}
                itemWidth={dimensions.width}
                sliderWidth={dimensions.width}
                renderItem={({ item, index }) =>
                    index === 0 ? (
                        <SharedElement key={index} id={`stay-image-${id}`}>
                            <Image
                                source={{ uri: item }}
                                style={[styles.image, { height: 320 }]}
                                resizeMode="cover"
                            />
                        </SharedElement>
                    ) : (
                        <Image
                            source={{ uri: item }}
                            style={[styles.image, { height: 320 }]}
                            key={index}
                        />
                    )
                }
            />
        );
    }

    return (
        <Image
            source={{ uri: data?.[0] }}
            style={[styles.image, { borderBottomRightRadius: 16 }]}
        />
    );
}
