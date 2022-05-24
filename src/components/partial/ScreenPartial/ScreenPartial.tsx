import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { ScreenPartialProps } from './ScreenPartial.types';
import styles from './ScreenPartial.styles';
import colors from '#/styles/colors'

export default function ScreenPartial({
    children,
    style,
    scoll = true,
    ViewComponent = SafeAreaView,
}: ScreenPartialProps) {
    return (
        <ViewComponent style={[colors.bgWhite, styles.screen, style]}>
            {scoll ? <ScrollView>{children}</ScrollView> : children}
        </ViewComponent>
    );
}
