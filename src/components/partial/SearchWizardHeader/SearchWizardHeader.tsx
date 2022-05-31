import { Text } from '#/components/base';
import { View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './SearchWizardHeader.styles';
import { Props } from './SearchWizardHeader.types';

export default function SearchWizardHeader({ children }: Props) {
    return (
        <>
            <LinearGradient
                colors={['#4169E1', 'transparent']}
                style={styles.background}
            />

            <View style={styles.header}>
                <Text color="white" size={24}>
                    {children}
                </Text>
            </View>
        </>
    );
}
