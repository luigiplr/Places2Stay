import React from 'react';

import { SvgXml } from 'react-native-svg';

import CalIconSVG from '#/static/img/cal-icon.svg';
import HomeLocationIconSVG from '#/static/img/home-location-icon.svg';
import BackIconSVG from '#/static/img/back-icon.svg';
import SearchPinIconSVG from '#/static/img/search-pin.svg';
import ThreeDotsIconSVG from '#/static/img/3-dots.svg';


import type { IconProps } from './Icon.types';

export const CalenderIcon = (props: IconProps) => (
    <SvgXml {...props} xml={CalIconSVG} />
);

export const HomeLocationIcon = (props: IconProps) => (
    <SvgXml {...props} xml={HomeLocationIconSVG} />
);

export const BackIcon = (props: IconProps) => (
    <SvgXml {...props} xml={BackIconSVG} />
);

export const SearchPinIcon = (props: IconProps) => (
    <SvgXml {...props} xml={SearchPinIconSVG} />
);

export const ThreeDotsIcon = (props: IconProps) => (
    <SvgXml {...props} xml={ThreeDotsIconSVG} />
);
