import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flexHorizontal: {
        flex: 1,
        flexDirection: 'row',
    },
    centerHorizontal: {
        justifyContent: 'center',
    },
    centerVertical: {
        alignItems: 'center',
    },
    spaceApart: {
        justifyContent: 'space-between',
    },
    flexGrow: {
        flexGrow: 1,
    },
    noFlexGrow: {
        flexGrow: 0,
    },
    absolute: {
        position: 'absolute',
    },
    devBorder: {
        borderColor: 'red',
        borderWidth: 1,
    },
});
