import { Text } from '#/components/base';
import React from 'react';
import { View } from 'react-native';

import styles from './SearchPlaceExperienceTypeForm.styles';

export const Option = ({
    title,
    desc,
    icon,
}: {
    title: string;
    desc?: string;
    icon: React.ReactNode;
}) => (
    <View style={styles.option}>
        <View>
            <Text size={16}>{title}</Text>
            <Text>{desc}</Text>
        </View>

        <View style={styles.iconContainer}>{icon}</View>
    </View>
);
