import ScreenPartial from '#/components/partial/ScreenPartial';
import React from 'react';
import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';
import { citys, getaways } from './mock_data';
import HomeHeader from '#/components/partial/HomeHeader';

export const HomeTab = () => {
    return (
        <ScreenPartial scoll={false}>
            <HomeHeader />
        </ScreenPartial>
    );
};
