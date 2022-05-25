import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App(props) {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    link: {
        color: 'blue',
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    text: {
        alignItems: 'center',
        fontSize: 24,
        marginBottom: 24,
    },
});
