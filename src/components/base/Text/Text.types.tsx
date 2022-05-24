import { TextProps as RNTextProps } from 'react-native';

export type TextProps = {
    varient?: 'header' | 'body';
    color?: string;
    center?: boolean;
    capitalize?: boolean;
    size?: number;
    bold?: boolean;
} & RNTextProps;
