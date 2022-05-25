import React, { useMemo } from 'react';
import { View, Image } from 'react-native';

import styles from './StayImage.styles';

import Carousel from 'react-native-snap-carousel';
import useSetting from '#/hooks/useSetting';
import { Dimensions } from 'react-native';

export default function StayImage({ data }: { data: string[] }) {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';
    const dimensions = useMemo(() => Dimensions.get('window'), []);

    if (appTheme === 'greatnotgood') {
        return (
            <Carousel
                data={data}
                itemWidth={dimensions.width}
                sliderWidth={dimensions.width}
                renderItem={({ item, index }) => (
                    <Image
                        source={{ uri: item }}
                        style={[styles.image, { height: 320 }]}
                        key={index}
                    />
                )}
            />
        );
    }

    return (
        <Image
            source={{ uri: data?.[0] }}
            style={[styles.image, { borderBottomRightRadius: 16, height: 219 }]}
        />
    );
}
