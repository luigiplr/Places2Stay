import React from 'react';

import { SvgXml } from 'react-native-svg';

import CalIconSVG from '#/static/img/cal-icon.svg';
import HomeLocationIconSVG from '#/static/img/home-location-icon.svg';

import type { IconProps } from './Icon.types';

export const CalenderIcon = (props: IconProps) => (
    <SvgXml {...props} xml={CalIconSVG} />
);

export const HomeLocationIcon = (props: IconProps) => (
    <SvgXml {...props} xml={HomeLocationIconSVG} />
);
