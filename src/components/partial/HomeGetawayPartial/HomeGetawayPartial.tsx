import React from 'react';
import { FlatList, View } from 'react-native';

import HomeGetawaySearch from '../HomeGetawaySearch';

import HomeGetawayItem from '../HomeGetawayItem';

import { Section } from './HomeGetawayPartial.util';
import HomeCityItem from '../HomeCityItem';

import styles from './HomeGetawayPartial.styles';
import { HomeGetawayPartialProps } from './HomeGetawayPartial.types';
import { useNavigation } from '@react-navigation/native';
import { BellIcon, UserIcon } from '#/components/base/Icon';
import layout from '#/styles/layout';

export default function HomeGetawayPartial({
    citys,
    getaways,
    ListHeaderComponentStyle,
}: HomeGetawayPartialProps) {
    const navigation = useNavigation();

    return (
        <FlatList
            data={['header', ...getaways]}
            ListHeaderComponentStyle={ListHeaderComponentStyle}
            renderItem={({ item, index }) =>
                item === 'header' ? (
                    <Section
                        header="Find your getaway"
                        subheader="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
                    />
                ) : (
                    <HomeGetawayItem
                        {...item}
                        key={index}
                        style={styles.padding}
                    />
                )
            }
            ListHeaderComponent={() => (
                <>
                    <View
                        style={[
                            layout.flexHorizontal,
                            layout.spaceApart,
                            styles.topbar,
                        ]}>
                        <BellIcon width="29" />
                        <UserIcon width="29" />
                    </View>

                    <HomeGetawaySearch
                        interactive={false}
                        onPress={() => navigation.navigate('Search')}
                        placeholder="Try 'Boston'"
                        style={styles.search}
                    />
                </>
            )}
            ListFooterComponent={() => (
                <Section header="20+ cities to explore" padChildren={false}>
                    <FlatList
                        horizontal
                        data={citys}
                        renderItem={({ item, index }) => (
                            <HomeCityItem
                                {...item}
                                key={`${index}-${item.id}`}
                                style={[
                                    styles.marginRight20,
                                    index === 0
                                        ? styles.marginLeft54
                                        : undefined,
                                ]}
                            />
                        )}
                    />
                </Section>
            )}
            stickyHeaderIndices={[0]}
        />
    );
}
