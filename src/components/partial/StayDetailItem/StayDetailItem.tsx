import React from 'react';
import { View } from 'react-native';

import { Text } from '#/components/base';

import styles from './StayDetailItem.styles';
import { StayDetailItemProps } from './StayDetailItem.types';

export default function StayDetailItem({
    title,
    details,
}: StayDetailItemProps) {
    return (
        <View style={styles.contain}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text center color="white" capitalize>
                        {title}
                    </Text>
                </View>
            </View>

            <View>
                {details.map((detail, i) => (
                    <View
                        key={detail.itemLabel}
                        style={[
                            styles.detailItem,
                            i !== details.length - 1 && { marginBottom: 14 },
                        ]}>
                        <Text capitalize>{detail.itemLabel}</Text>
                        <Text>{detail.itemDetail}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
