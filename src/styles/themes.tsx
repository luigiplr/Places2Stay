import { StyleSheet } from 'react-native';

const lighthouselabs = StyleSheet.create({
    appBg: { backgroundColor: '#FFF1D2' },

    textHeader: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Bitter-Regular',
    },

    textBody: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'EncodeSans-Regular',
    },

    textHeaderBold: { fontFamily: 'Bitter-Regular' },
    textBodyBold: { fontFamily: 'EncodeSans-Regular' },
});

const greatnotgood = StyleSheet.create({
    appBg: { backgroundColor: '#FFFFFF' },

    textHeader: {
        color: '#29375F',
        fontFamily: 'AvenirNext-Regular',
        fontSize: 26,
    },

    textBody: {
        color: '#29375F',
        fontSize: 13,
        fontFamily: 'AvenirNext-Regular',
    },

    textHeaderBold: { fontFamily: 'AvenirNext-Regular' },

    textBodyBold: { fontFamily: 'AvenirNext-Medium' },
});

export default {
    greatnotgood,
    lighthouselabs,
};
