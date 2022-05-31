import React from 'react';

import { SvgXml } from 'react-native-svg';

import CalIconSVG from '#/static/img/cal-icon.svg';
import HomeLocationIconSVG from '#/static/img/home-location-icon.svg';
import BackIconSVG from '#/static/img/back-icon.svg';
import SearchPinIconSVG from '#/static/img/search-pin.svg';
import ThreeDotsIconSVG from '#/static/img/3-dots.svg';
import MapIconSVG from '#/static/img/map.svg';
import HomepageIconSVG from '#/static/img/homepage.svg';
import GlassdrinksIconSVG from '#/static/img/glass-drinks.svg';

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

export const MapIcon = (props: IconProps) => (
    <SvgXml {...props} xml={MapIconSVG} />
);

export const HomepageIcon = (props: IconProps) => (
    <SvgXml {...props} xml={HomepageIconSVG} />
);

export const GlassdrinksIcon = (props: IconProps) => (
    <SvgXml {...props} xml={GlassdrinksIconSVG} />
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
