import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        overflow: 'hidden',
        flex: 1,
        marginBottom: 20,
    },
    textContaienr: {
        flexDirection: 'row',
        marginTop: 30,
    },
    bold: {
        fontWeight: 'bold',
    },
    month: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 7,
        marginRight: 10,
        backgroundColor: '#eee',
        height: 100,
        minWidth: 80,

        flex: 0,
        flexGrow: 0,

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
    monthText: {
        marginTop: 7,
        marginBottom: 4,
    },
    months: {
        overflow: 'visible',
        marginTop: 15,
    },
    length: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: '#eee',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 1,
    },
    lengths: {
        flexDirection: 'row',
        marginTop: 15,
    },
});
