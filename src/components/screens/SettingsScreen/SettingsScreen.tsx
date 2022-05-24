import { Text } from '#/components/base';
import Toggle from '#/components/base/Toggle';
import ScreenPartial from '#/components/partial/ScreenPartial';
import useSetting from '#/hooks/useSetting';
import React, { useCallback } from 'react';

export default function SettingsScreen() {
    const [theme, updateThemeSetting] = useSetting(
        'app.theme',
        'lighthouselabs',
    );

    const onToggleTheme = useCallback(
        (index: number) => {
            updateThemeSetting(index === 0 ? 'lighthouselabs' : 'greatnotgood');
        },
        [updateThemeSetting],
    );

    return (
        <ScreenPartial style={{ paddingLeft: 10 }}>
            <Text varient="header" style={{ marginBottom: 40 }}>
                Settings
            </Text>

            <Text>App Theme ({theme})</Text>

            <Toggle
                values={['Lighthouse Labs', 'GNG']}
                onToggle={onToggleTheme}
                selected={+(theme === 'greatnotgood')}
            />
        </ScreenPartial>
    );
}
