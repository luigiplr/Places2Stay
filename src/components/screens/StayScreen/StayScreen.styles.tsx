import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        paddingHorizontal: 32,
        paddingTop: 15,
        backgroundColor: 'white',
    },

    details: {
        marginTop: 24,
    },

    backbutton: {
        width: 40,
        height: 35,
        position: 'absolute',
        marginLeft: 30,
        zIndex: 2,
    },
    backBlur: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 9,
    },

    reviewers: {
        opacity: 0.9,
        marginTop: 3,
    },

    avatar: {
        width: 32,
        height: 32,
        borderRadius: 100,
        borderColor: '#F8F9FC',
        borderWidth: 1,
    },

    sectionHeader: {
        paddingVertical: 20,
    },
});
