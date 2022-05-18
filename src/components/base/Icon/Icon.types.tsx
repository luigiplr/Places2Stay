import type { XmlProps } from 'react-native-svg';

export type IconProps = {
    width: string;
    height: string;
} & Omit<XmlProps, 'xml'>;
