import React from 'react';
import { View } from 'react-native';

import styles from './StayScreen.styles';

import stayData from './mock_data';
import ScreenPartial from '#/components/partial/ScreenPartial';
import { ScrollView } from 'react-native';
import useSetting from '#/hooks/useSetting';

import layout from '#/styles/layout';
import StayHeader from '#/components/partial/StayHeader';
import {
    StayScreenBackButtonHeader,
    Reviews,
    SectionHeader,
} from './StayScreen.util';
import StayImage from '#/components/partial/StayImage/StayImage';
import StayOfferings from '#/components/partial/StayOfferings';

export default function StayScreen() {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';

    return (
        <ScreenPartial scoll={false} ViewComponent={View}>
            {appTheme === 'lighthouselabs' ? (
                <>
                    <StayImage data={[stayData.image]} />

                    <View style={[styles.content, layout.flexGrow]}>
                        <StayHeader {...stayData} />
                        <StayOfferings details={stayData.details} />
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

                            <StayOfferings details={stayData.details} />
                        </View>
                    </ScrollView>
                </>
            )}
        </ScreenPartial>
    );
}
