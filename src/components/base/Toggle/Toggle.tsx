import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Text from '../Text';
import _ from 'lodash';

import { Props } from './Toggle.types';
import styles from './Toggle.styles';

const spring = (element: Animated.Value, toValue: number) =>
    Animated.spring(element, {
        toValue,
        useNativeDriver: false,
    }).start();

const Toggle = ({ onToggle, values, selected = 0 }: Props) => {
    const [widths, setWidths] = useState<number[]>(values.map(() => 0));
    const [currentIndex, setCurrentIndex] = useState(() => selected);

    const toggleAnimationWidth = useRef(
        new Animated.Value(widths[currentIndex]),
    ).current;

    const toggleAnimationLeft = useRef(new Animated.Value(5)).current;

    const setValues = useCallback(
        (newWidths: number[]) => {
            toggleAnimationWidth.setValue(newWidths[currentIndex]);
            toggleAnimationLeft.setValue(newWidths[currentIndex]);
            toggleAnimationLeft.setValue(5);
        },
        [currentIndex, toggleAnimationLeft, toggleAnimationWidth],
    );

    const updateOffsets = useCallback(
        (index: number, animate = true) => {
            const offset: number = _.take(widths, index).reduce(
                (result: number, incoming: number) => result + incoming,
                5 + index * 10,
            );

            if (animate) {
                spring(toggleAnimationLeft, offset);
                spring(toggleAnimationWidth, widths[index]);
            } else {
                toggleAnimationLeft.setValue(offset);
                toggleAnimationWidth.setValue(widths[index]);
            }
        },
        [toggleAnimationLeft, toggleAnimationWidth, widths],
    );

    const onLayout = useCallback(
        ({ nativeEvent }: LayoutChangeEvent, index: number) => {
            const { width } = nativeEvent.layout;

            let newWidths = widths;
            newWidths[index] = width;

            if (!_.isEqual(newWidths, width)) {
                setValues(newWidths);
                setWidths(newWidths);
                updateOffsets(currentIndex, false);
            }
        },
        [widths, setValues, currentIndex, updateOffsets],
    );

    const onPress = useCallback(
        (index: number) => {
            setCurrentIndex(index);
            updateOffsets(index);

            if (onToggle) {
                onToggle(index);
            }
        },
        [onToggle, toggleAnimationLeft, toggleAnimationWidth, widths],
    );

    useEffect(() => onPress(selected), [selected, onPress]);

    return (
        <View style={styles.toggle}>
            <Animated.View
                style={[
                    styles.thumb,
                    {
                        width: toggleAnimationWidth,
                        left: toggleAnimationLeft,
                    },
                ]}
            />

            {values.map((value, i) => (
                <TouchableWithoutFeedback
                    style={styles.option}
                    onLayout={e => onLayout(e, i)}
                    onPress={() => onPress(i)}
                    key={i}>
                    <Text>{value}</Text>
                </TouchableWithoutFeedback>
            ))}
        </View>
    );
};

export default Toggle;
