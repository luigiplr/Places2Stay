import React from 'react';
import { FlatList } from 'react-native';

import HomeGetawaySearch from '../HomeGetawaySearch';

import HomeGetawayItem from '../HomeGetawayItem';

import { Section } from './HomeGetawayPartial.util';
import HomeCityItem from '../HomeCityItem';

import styles from './HomeGetawayPartial.styles';
import { HomeGetawayPartialProps } from './HomeGetawayPartial.types';

export default function HomeGetawayPartial({
    citys,
    getaways,
}: HomeGetawayPartialProps) {
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
                            key={`${index}-${item.id}`}
                            style={[
                                styles.marginRight20,
                                index === 0 ? styles.marginLeft54 : undefined,
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
