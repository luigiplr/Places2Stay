/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { HomeSection } from './HomeScreen.util';
import HomeTabNavigator from '#/components/partial/HomeTabNavigator';

import ScreenPartial from '#/components/partial/ScreenPartial';
import { citys, getaways } from './mock_data';
import HomeHeader from '#/components/partial/HomeHeader';

import styles from './HomeScreen.styles';
import { View, FlatList } from 'react-native';
import HomeCityItem from '#/components/partial/HomeCityItem';
import HomeExperienceItem from '#/components/partial/HomeExperienceItem';
import useSetting from '#/hooks/useSetting';
import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';

export default function HomeScreen() {
    return <HomeTabNavigator>{HomeTab}</HomeTabNavigator>;
}

function HomeTab() {
    const [appTheme] = useSetting('app.theme');

    return (
        <>
            {appTheme === 'lighthouselabs' && (
                <ScreenPartial scoll={false}>
                    <HomeGetawayPartial citys={citys} getaways={getaways} />
                </ScreenPartial>
            )}

            {appTheme === 'greatnotgood' && (
                <ScreenPartial>
                    <View style={styles.padding}>
                        <HomeHeader />
                    </View>

                    <HomeSection title="Experience" viewAll>
                        <FlatList
                            horizontal
                            data={getaways}
                            renderItem={({ item, index }) => (
                                <HomeExperienceItem
                                    {...item}
                                    key={index}
                                    style={[
                                        { marginRight: 22 },
                                        index === 0
                                            ? { marginLeft: 40 }
                                            : undefined,
                                    ]}
                                />
                            )}
                        />
                    </HomeSection>

                    <HomeSection title="Explore City" arrows>
                        <FlatList
                            horizontal
                            data={citys}
                            renderItem={({ item, index }) => (
                                <HomeCityItem
                                    {...item}
                                    key={`${index}-${item.id}`}
                                    style={[
                                        { marginRight: 23 },
                                        index === 0
                                            ? { marginLeft: 40 }
                                            : undefined,
                                    ]}
                                />
                            )}
                        />
                    </HomeSection>
                </ScreenPartial>
            )}
        </>
    );
}
