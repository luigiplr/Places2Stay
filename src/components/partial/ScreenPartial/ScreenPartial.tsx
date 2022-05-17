import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { ScreenPartialProps } from './ScreenPartial.types';

export default function ScreenPartial({ children }: ScreenPartialProps) {
    return (
        <View style={{ backgroundColor: '#FFF1D2', flex: 1 }}>
            <SafeAreaView>
                <ScrollView>{children}</ScrollView>
            </SafeAreaView>
        </View>
    );
}
