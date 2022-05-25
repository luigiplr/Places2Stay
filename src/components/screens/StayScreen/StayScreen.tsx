import React from 'react';
import { View } from 'react-native';

import styles from './StayScreen.styles';

import stayData from './mock_data';
import ScreenPartial from '#/components/partial/ScreenPartial';
import useSetting from '#/hooks/useSetting';

import layout from '#/styles/layout';
import StayHeader from '#/components/partial/StayHeader';
import {
    StayScreenBackButtonHeader,
    Reviews,
    SectionHeader,
} from './StayScreen.util';
import StayOfferings from '#/components/partial/StayOfferings';
import { ScrollView } from 'react-native-gesture-handler';
import StayImage from '#/components/partial/StayImage/StayImage';
import { SharedElement } from 'react-navigation-shared-element';

function StayScreen({ route }) {
    const appTheme = useSetting('app.theme')[0] ?? 'lighthouselabs';

    return appTheme === 'lighthouselabs' ? (
        <ScreenPartial scoll={false} ViewComponent={View}>
            <View style={[styles.content, layout.flexGrow]}>
                <StayImage data={[stayData.image]} />

                <StayHeader {...stayData} />
                <StayOfferings details={stayData.details} />
            </View>
        </ScreenPartial>
    ) : (
        <>
            <View
                style={[
                    layout.absolute,
                    {
                        backgroundColor: 'white',
                        height: '100%',
                        width: '100%',
                    },
                ]}
            />

            <ScrollView
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}>
                <SharedElement id={`body-${route?.params?.id}`}>
                    <View>
                        <View>
                            <StayScreenBackButtonHeader />

                            <StayImage
                                id={route?.params?.id}
                                data={[stayData.image]}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <StayHeader
                                {...stayData}
                                titleShort={route?.params?.title}
                                id={route?.params?.id}
                            />

                            <View style={[styles.content, { paddingTop: 0 }]}>
                                <Reviews id={route?.params?.id} />

                                <SectionHeader more>
                                    What this place offers
                                </SectionHeader>

                                <StayOfferings details={stayData.details} />
                            </View>
                        </View>
                    </View>
                </SharedElement>
            </ScrollView>
        </>
    );
}

StayScreen.sharedElements = route => [
    {
        id: `stay-image-${route?.params?.id}`,
        animation: 'move',
        resize: 'auto',
        align: 'auto',
    },
    {
        id: `body-${route?.params?.id}`,
        animation: 'fade',
        resize: 'clip',
        align: 'auto',
    },
    {
        id: `stay-rating-${route?.params?.id}`,
        animation: 'fade',
        resize: 'none',
        align: 'center-center',
    },
];

export default StayScreen;
