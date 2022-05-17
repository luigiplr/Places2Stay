import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { ScreenPartialProps } from './ScreenPartial.types';

export default function ScreenPartial({ children }: ScreenPartialProps) {
    return (
        <SafeAreaView>
            <ScrollView>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}
