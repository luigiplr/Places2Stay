import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    SearchScreen: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'SearchScreen'>;
