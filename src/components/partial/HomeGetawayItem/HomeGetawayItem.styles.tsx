import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrap: {
        marginBottom: 20,
    },
    imageContain: {
        marginBottom: 21,
        aspectRatio: 5500 / 3011,
        width: '100%',
    },
    image: {
        borderRadius: 8,
        width: '100%',
        height: '100%',
    },
    cityText: {
        marginTop: 7,
    },
    priceContain: {
        backgroundColor: '#FFA500',
        width: 86,
        height: 32,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        flex: 1,
        justifyContent: 'center',
    }
});
