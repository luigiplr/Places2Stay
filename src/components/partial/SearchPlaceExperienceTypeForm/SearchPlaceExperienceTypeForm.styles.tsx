import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        height: 140,
        width: '100%',
    },
    background: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 17,
        paddingRight: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 25,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 1,
    },
    iconContainer: {
        backgroundColor: '#4169E180',
        padding: 8,
        borderRadius: 8,
    },
});
