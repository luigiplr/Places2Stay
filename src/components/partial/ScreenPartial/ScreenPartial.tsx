import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { ScreenPartialProps } from './ScreenPartial.types';
import styles from './ScreenPartial.styles';

export default function ScreenPartial({ children, style, scoll = true }: ScreenPartialProps) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {scoll ? <ScrollView>{children}</ScrollView> : children}
        </SafeAreaView>
    );
}
