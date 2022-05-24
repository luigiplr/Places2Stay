import React, { ReactNode } from 'react';

import styles from './HomeScreen.styles';
import { View } from 'react-native';
import { Text } from '#/components/base';
import layout from '#/styles/layout';
import Icon from 'react-native-vector-icons/Feather';

export const HomeSection = ({
    children,
    title,
    viewAll,
    arrows,
}: {
    children: ReactNode;
    title: string;
    viewAll?: boolean;
    arrows?: boolean;
}) => (
    <>
        <View
            style={[
                layout.flexHorizontal,
                styles.sectionTitle,
                { alignItems: 'center' },
            ]}>
            <Text style={[layout.flexGrow]} bold size={18}>
                {title}
            </Text>

            {viewAll && (
                <Text color="#3394FF" bold>
                    View All
                </Text>
            )}

            {arrows && (
                <>
                    <Icon
                        name="chevron-left"
                        size={26}
                        color="#C6C2CB"
                        style={{ marginRight: 5 }}
                    />
                    <Icon name="chevron-right" size={26} color="#3394FF" />
                </>
            )}
        </View>
        <View style={styles.section}>{children}</View>
    </>
);
