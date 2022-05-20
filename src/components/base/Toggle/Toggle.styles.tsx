import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    toggle: {
        backgroundColor: '#E3E3E3',
        flexDirection: 'row',
        height: 47,
        borderRadius: 47,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        position: 'relative',
    },
    option: {
        margin: 5,
        height: 37,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    thumb: {
        position: 'absolute',
        top: 5,
        left: 5,
        height: 37,
        width: 59,
        borderRadius: 37,
        backgroundColor: '#fff',
    },
});
