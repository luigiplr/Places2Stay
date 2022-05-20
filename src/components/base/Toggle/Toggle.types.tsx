import { TextProps } from 'react-native';

export type Props = TextProps & {
    onToggle?: (index: number) => void;
    values: string[];
    selected?: number;
};
