import React from 'react';
import { View } from 'react-native';

import { Text, Icon } from '#/components/base';

import styles from './StayDetailItem.styles';
import { StayDetailItemProps } from './StayDetailItem.types';
import useSetting from '#/hooks/useSetting';
import FeatherIcon from 'react-native-vector-icons/Feather';
import layout from '#/styles/layout';

const icons_map = {
    wifi: <FeatherIcon name="wifi" size={22} color="#445B90" />,
    keyless: <FeatherIcon name="hash" size={22} color="#445B90" />,
    pool: <FeatherIcon name="smile" size={22} color="#445B90" />,
} as const;

export default function StayDetailItem({ title, items }: StayDetailItemProps) {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';

    if (appTheme === 'greatnotgood') {
        return (
            <View style={[styles.box, layout.centerVertical]}>
                {icons_map?.[title.toLowerCase()] ?? null}

                <Text style={{ marginTop: 9 }} capitalize>
                    {title}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.contain}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text center color="white" capitalize>
                        {title}
                    </Text>
                </View>

                <View style={styles.dots}>
                    <Icon.ThreeDotsIcon width="18" height="4" />
                </View>
            </View>

            <View>
                {items.map((detail, i) => (
                    <View
                        key={detail.itemLabel}
                        style={[
                            styles.detailItem,
                            i !== items.length - 1 && { marginBottom: 14 },
                        ]}>
                        <Text capitalize>{detail.itemLabel}</Text>
                        <Text>{detail.itemDetail}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
