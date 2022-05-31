import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './AppTabBar.styles';

export default function AppTabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    const appTheme =
        descriptors[Object.keys(descriptors)[0]]?.options?.appTheme ??
        'lighthouselabs';

    return (
        <>
            <View
                style={[
                    styles.navBar,
                    styles?.[
                        `navBar.${
                            appTheme as 'greatnotgood' | 'lighthouselabs'
                        }`
                    ],
                    ,
                    {
                        zIndex: 10,
                    },
                ]}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    if (!options?.icon) {
                        return null;
                    }

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({
                                name: route.name,
                                merge: true,
                            });
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={
                                isFocused ? { selected: true } : {}
                            }
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarTestID}
                            onPress={onPress}>
                            {options?.icon(isFocused)}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </>
    );
}
