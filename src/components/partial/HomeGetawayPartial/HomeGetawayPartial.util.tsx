import React from 'react';
import { View } from 'react-native';

import styles from './HomeGetawayPartial.styles';
import Text from '#/components/base/Text';
import { SectionProps } from './HomeGetawayPartial.types';

export const Section = ({
    children,
    header,
    subheader,
    padChildren = true,
}: SectionProps) => (
    <View>
        <View style={[styles.wrap, styles.padding]}>
            <Text varient="header">{header}</Text>
            {subheader && <Text style={styles.subheader}>{subheader}</Text>}
        </View>

        <View style={padChildren && styles.padding}>{children}</View>
    </View>
);
