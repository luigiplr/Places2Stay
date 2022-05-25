import React from 'react';

import { SvgXml } from 'react-native-svg';

import CalIconSVG from '#/static/img/cal-icon.svg';
import HomeLocationIconSVG from '#/static/img/home-location-icon.svg';
import BackIconSVG from '#/static/img/back-icon.svg';
import SearchPinIconSVG from '#/static/img/search-pin.svg';
import ThreeDotsIconSVG from '#/static/img/3-dots.svg';
import StarIconSVG from '#/static/img/3-dots.svg';

import type { IconProps } from './Icon.types';
import { View } from 'react-native';

import colors from '#/styles/colors';
import styles from './Icon.styles';

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

export const FeatherStarIcon = (props: IconProps) => (
    <SvgXml {...props} xml={StarIconSVG} />
);

export const StaggeredMenuIcon = ({
    width = 40,
    height = 5,
}: {
    width?: number;
    height?: number;
}) => (
    <View>
        <View style={[{ width: width }, colors.bgDarkBlue, styles.menuIcon]} />
        <View
            style={[
                { width: width / 2, marginTop: height - 4 },
                colors.bgDarkBlue,
                styles.menuIcon,
            ]}
        />
    </View>
);
