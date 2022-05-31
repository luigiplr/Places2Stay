import React from 'react';
import { View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Header,
    Search,
    StayType,
    PriceRange,
    Stays,
} from './ModernSearch.util';
import { GetawayItem } from '../HomeGetawayItem/HomeGetawayItem.types';
import { Image } from 'react-native';

export default function ModernSearch({
    getaways,
}: {
    getaways: GetawayItem[];
}) {
    return (
        <View>
            <BlurView
                style={{ height: '100%', zIndex: 1 }}
                blurType="ultraThinMaterial">
                <SafeAreaView>
                    <View
                        style={{ paddingHorizontal: 34, paddingVertical: 20 }}>
                        <Header />
                        <Search />
                        <StayType />
                        <PriceRange />
                    </View>

                    <Stays getaways={getaways} />
                </SafeAreaView>
            </BlurView>

            <Image
                style={{
                    height: '100%',
                    width: '100%',
                    zIndex: 0,
                    position: 'absolute',
                }}
                source={{
                    uri: 'https://files.123freevectors.com/wp-content/original/4487-light-blue-blurry-background.jpg',
                }}
            />
        </View>
    );
}
