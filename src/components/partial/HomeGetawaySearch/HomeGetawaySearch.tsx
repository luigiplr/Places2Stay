import { Text } from '#/components/base';
import React from 'react';
import { TextInput, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './HomeGetawaySearch.styles';
import type { HomeGetawaySearchProps } from './HomeGetawaySearch.types';

export default function HomeGetawaySearch({
    style,
    interactive = true,
    onPress,
    placeholder,
    ...props
}: HomeGetawaySearchProps) {
    return (
        <View style={style}>
            {interactive ? (
                <TextInput style={styles.textbox} placeholder={placeholder} {...props} />
            ) : (
                <TouchableWithoutFeedback onPress={onPress}>
                    <View
                        style={[styles.textbox, { justifyContent: 'center' }]}>
                        <Text center color="#858585" size={16}>
                            {placeholder}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
}
