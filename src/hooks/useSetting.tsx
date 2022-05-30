import { useCallback, useEffect, useState } from 'react';
import Settings, { SettingsTypes } from 'react-native-cross-settings';
import EventEmitter from 'eventemitter3';
import defaultSettings from '#/static/defaultSettings.json';

const settingsEmitter = new EventEmitter();

export default function useSetting<K extends keyof typeof defaultSettings>(
    settingKey: K,
) {
    const [value, updateValue] = useState<SettingsTypes>(
        () => Settings.get(settingKey) ?? defaultSettings?.[settingKey],
    );

    useEffect(() => {
        const onUpdate = (newValue: SettingsTypes) => updateValue(newValue);

        settingsEmitter.on(`update[${settingKey}]`, onUpdate);

        return () => {
            settingsEmitter.removeListener(`update[${settingKey}]`, onUpdate);
        };
    }, [settingKey]);

    const updateSetting = useCallback(
        (newValue: SettingsTypes) => {
            updateValue(newValue);

            Settings.set({ [settingKey]: newValue });
            settingsEmitter.emit(`update[${settingKey}]`, newValue);
        },
        [settingKey],
    );

    return [value, updateSetting] as [
        SettingsTypes,
        (newValue: SettingsTypes) => void,
    ];
}
