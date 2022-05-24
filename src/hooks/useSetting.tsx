import { useCallback, useEffect, useState } from 'react';
import Settings from 'react-native-cross-settings';
import EventEmitter from 'eventemitter3';

type SettingValue = number | string | boolean | null;

const settings = {} as const;
const settingsEmitter = new EventEmitter();

export default function useSetting(
    settingKey: string,
    defaultValue?: SettingValue,
) {
    const [value, updateValue] = useState(
        () =>
            settings?.[settingKey] ?? Settings.get(settingKey) ?? defaultValue,
    );

    useEffect(() => {
        const onUpdate = (newValue: SettingValue) => updateValue(newValue);

        settingsEmitter.on(`update[${settingKey}]`, onUpdate);

        return () => {
            settingsEmitter.removeListener(`update[${settingKey}]`, onUpdate);
        };
    }, [settingKey]);

    const updateSetting = useCallback(
        (newValue: SettingValue) => {
            updateValue(newValue);

            Settings.set({ [settingKey]: newValue });
            settingsEmitter.emit(`update[${settingKey}]`, newValue);
            settings[settingKey] = newValue;
        },
        [settingKey],
    );

    return [value, updateSetting] as [
        SettingValue,
        (newValue: SettingValue) => void,
    ];
}
