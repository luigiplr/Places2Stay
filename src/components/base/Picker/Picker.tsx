import { PickerProps } from './Picker.types';

import { Text } from '#/components/base';
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDidUpdate } from 'rooks';

import styles from './Picker.styles';
import layout from '#/styles/layout';
import { PlusIcon, MinusIcon } from '../Icon';

export default function Picker({ onChange, title, description }: PickerProps) {
    const [value, setValue] = useState<number>(0);

    useDidUpdate(() => onChange(value), [value]);

    return (
        <View style={styles.picker}>
            <View
                style={[
                    layout.spaceApart,
                    layout.flexHorizontal,
                    layout.centerVertical,
                ]}>
                <View style={{ height: 35 }}>
                    <Text size={15}>{title}</Text>
                    {description && <Text color="#8C8C8C">{description}</Text>}
                </View>

                <View style={{ height: 30 }}>
                    <View
                        style={[layout.flexHorizontal, layout.centerVertical]}>
                        <TouchableOpacity
                            onPress={() => setValue(value - 1)}
                            disabled={value < 1}>
                            <MinusIcon style={[value < 1 && styles.disabled]} />
                        </TouchableOpacity>

                        <Text bold style={styles.counterResult} color="black">
                            {value}
                        </Text>

                        <TouchableOpacity onPress={() => setValue(value + 1)}>
                            <PlusIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
