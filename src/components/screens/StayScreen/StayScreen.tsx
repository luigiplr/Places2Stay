import React from 'react';
import { View } from 'react-native';

import styles from './StayScreen.styles';

import stayData from './mock_data';
import ScreenPartial from '#/components/partial/ScreenPartial';
import StayDetailItem from '#/components/partial/StayDetailItem';
import { ScrollView } from 'react-native-gesture-handler';
import useSetting from '#/hooks/useSetting';

import layout from '#/styles/layout';
import StayHeader from '#/components/partial/StayHeader';
import {
    StayScreenBackButtonHeader,
    RatingStars,
    Reviews,
    SectionHeader,
} from './StayScreen.util';
import StayImage from '#/components/partial/StayImage/StayImage';
import { Card, Text } from '#/components/base';

export default function StayScreen() {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';

    return (
        <ScreenPartial scoll={false} ViewComponent={View}>
            {appTheme === 'lighthouselabs' ? (
                <>
                    <StayImage data={[stayData.image]} />

                    <View style={[styles.content, layout.flexGrow]}>
                        <StayHeader {...stayData} />

                        <ScrollView style={styles.details}>
                            {stayData.details.map(info => (
                                <StayDetailItem
                                    title={info.title}
                                    details={info.items}
                                    key={info.title}
                                />
                            ))}
                        </ScrollView>
                    </View>
                </>
            ) : (
                <>
                    <ScrollView
                        stickyHeaderIndices={[1]}
                        showsVerticalScrollIndicator={false}>
                        <View>
                            <StayScreenBackButtonHeader />
                            <StayImage data={[stayData.image]} />
                        </View>

                        <StayHeader {...stayData} />

                        <View style={[styles.content, { paddingTop: 0 }]}>
                            <Reviews />

                            <SectionHeader more>
                                What this place offers
                            </SectionHeader>
                        </View>
                    </ScrollView>
                </>
            )}
        </ScreenPartial>
    );
}
