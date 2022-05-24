import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { ScreenPartialProps } from './ScreenPartial.types';
import styles from './ScreenPartial.styles';
import themes from '#/styles/themes';
import useSetting from '#/hooks/useSetting';

export default function ScreenPartial({
    children,
    style,
    scoll = true,
    ViewComponent = SafeAreaView,
}: ScreenPartialProps) {
    const [appTheme] = useSetting('app.theme');

    return (
        <ViewComponent
            style={[
                styles.screen,
                { backgroundColor: '#FFF1D2' },
                themes?.[
                    (appTheme as 'lighthouselabs' | 'greatnotgood' | null) ??
                    'lighthouselabs'
                ]?.appBg,
            ]}>
            <View style={style}>
                {scoll ? <ScrollView>{children}</ScrollView> : children}
            </View>
        </ViewComponent>
    );
}
