import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    contain: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 31,
        paddingBottom: 33,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        height: 32,
        width: 86,
        backgroundColor: '#4169E1',
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
    },
    detailItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 31,
        paddingRight: 40,
    },
    dots: {
        justifyContent: 'center',
        marginRight: 16,
    },
    box: {
        paddingHorizontal: 15,
        paddingVertical: 18,
        borderColor: '#D4DDF8',
        borderWidth: 1,
        borderRadius: 9,
        width: 88,
        height: 88,
        justifyContent: 'space-between',
        marginRight: 23
    },
});
