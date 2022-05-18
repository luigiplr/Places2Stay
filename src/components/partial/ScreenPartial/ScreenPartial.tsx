import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { ScreenPartialProps } from './ScreenPartial.types';
import styles from './ScreenPartial.styles';

export default function ScreenPartial({
    children,
    style,
    scoll = true,
    ViewComponent = SafeAreaView,
}: ScreenPartialProps) {
    return (
        <ViewComponent style={[styles.screen, style]}>
            {scoll ? <ScrollView>{children}</ScrollView> : children}
        </ViewComponent>
    );
}
