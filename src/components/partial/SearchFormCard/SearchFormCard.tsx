import { View, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import styles from './SearchFormCard.styles';
import { Props } from './SearchFormCard.types';
import layout from '#/styles/layout';
import { Text } from '#/components/base';
import { BackIcon } from '#/components/base/Icon';
import { useWizard } from 'react-use-wizard';

export default function SearchFormCard({
    children,
    title,
    onBackPress,
    nextStepText = 'Next',
    onNextPress,
}: Props) {
    const { nextStep } = useWizard();
    const _onNextPress = useCallback(() => {
        nextStep();

        if (onNextPress) {
            onNextPress();
        }
    }, [onNextPress, nextStep]);

    return (
        <View style={[styles.bg, layout.flexGrow]}>
            <View style={styles.back}>
                <TouchableOpacity onPress={onBackPress}>
                    <BackIcon width="24" height="24" />
                </TouchableOpacity>
            </View>

            <View style={{ height: 90 }}>
                <View
                    style={[
                        layout.centerHorizontal,
                        layout.flexHorizontal,
                        layout.noFlexGrow,
                    ]}>
                    <View style={styles.handle} />
                </View>

                <Text color="black" center style={styles.title} size={18}>
                    {title}
                </Text>
            </View>

            <View style={[styles.body, layout.flexGrow]}>{children}</View>

            <View style={[styles.bottomBar]}>
                <View style={[layout.flexHorizontal, layout.spaceApart]}>
                    <TouchableOpacity
                        style={[styles.next, layout.centerHorizontal]}
                        onPress={_onNextPress}>
                        <Text underline>Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={nextStep}>
                        <View
                            style={[
                                styles.next,
                                layout.centerHorizontal,
                                layout.centerVertical,
                                { backgroundColor: '#4169E1' },
                            ]}>
                            <Text color="white" size={17}>
                                {nextStepText}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
