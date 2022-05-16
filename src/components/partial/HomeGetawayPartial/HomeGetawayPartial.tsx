import React from 'react';
import { FlatList } from 'react-native';

import HomeGetawaySearch from '../HomeGetawaySearch';

import HomeGetawayItem from '../HomeGetawayItem';

import { citys, getaways } from './data';

import { Section } from './HomeGetawayPartial.util';
import HomeCityItem from '../HomeCityItem';

import styles from './HomeGetawayPartial.styles';

export default function HomeGetawayPartial() {
    return (
        <>
            <HomeGetawaySearch style={styles.search} />

            <Section
                header="Find your getaway"
                subheader="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces">
                {getaways.map((item, index) => (
                    <HomeGetawayItem {...item} key={index} />
                ))}
            </Section>

            <Section header="20+ cities to explore" padChildren={false}>
                <FlatList
                    horizontal
                    data={citys}
                    renderItem={({ item, index }) => (
                        <HomeCityItem
                            {...item}
                            key={index}
                            style={[
                                // eslint-disable-next-line react-native/no-inline-styles
                                index === 0 ? { marginLeft: 54 } : undefined,
                                // eslint-disable-next-line react-native/no-inline-styles
                                index + 1 !== citys.length ? { marginRight: 20 } : undefined,
                            ]}
                        />
                    )}
                />
            </Section>
        </>
    );
}

/*

                <FlatList
                    data={getaways}
                    renderItem={({ item, index }) => (
                        <HomeGetawayItem {...item} key={index} />
                    )}
                />
                */
