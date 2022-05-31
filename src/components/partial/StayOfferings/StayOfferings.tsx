import StayDetailItem from '#/components/partial/StayDetailItem';
import { ScrollView } from 'react-native';
import React from 'react';

import styles from './StayOfferings.styles';
import { StayOfferingsProps } from './StayOfferings.types';
import useSetting from '#/hooks/useSetting';

export default function StayOfferings({ details }: StayOfferingsProps) {
    const [appTheme] = useSetting('app.theme');

    return (
        <ScrollView
            style={[
                styles.details,
                appTheme === 'greatnotgood' && { marginTop: 0 },
            ]}
            horizontal={appTheme === 'greatnotgood'}>
            {details?.map(info => (
                <StayDetailItem {...info} key={info.title} />
            ))}
        </ScrollView>
    );
}
