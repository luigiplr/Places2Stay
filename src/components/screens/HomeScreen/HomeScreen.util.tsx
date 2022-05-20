import ScreenPartial from '#/components/partial/ScreenPartial';
import React from 'react';
import HomeGetawayPartial from '#/components/partial/HomeGetawayPartial';
import { citys, getaways } from './mock_data';

export const HomeTab = () => {
    return (
        <ScreenPartial scoll={false}>
            <HomeGetawayPartial getaways={getaways} citys={citys} />
        </ScreenPartial>
    );
};
