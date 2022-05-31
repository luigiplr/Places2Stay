import Toggle from '#/components/base/Toggle';
import ScreenPartial from '#/components/partial/ScreenPartial';
import React from 'react';

export default function CalendarScreen() {
    return (
        <ScreenPartial>
            <Toggle values={['Calendar', "I'm flexible", 'Three options??!']} />
        </ScreenPartial>
    );
}
