import { Text } from '#/components/base';
import { StaggeredMenuIcon } from '#/components/base/Icon';
import React from 'react';
import { Image, View } from 'react-native';

import layout from '#/styles/layout';
import styles from './HomeHeader.styles';
import Icon from 'react-native-vector-icons/Feather';

export default function HomeHeader() {
    return (
        <>
            <View style={[layout.flexHorizontal, layout.center]}>
                <StaggeredMenuIcon width={20} height={8} />

                <View
                    style={[
                        layout.flexHorizontal,
                        layout.center,
                        layout.flexGrow,
                    ]}>
                    <Text>Welcome, </Text>
                    <Text bold>Luigi</Text>
                </View>

                <Image
                    style={styles.avatarImg}
                    source={{
                        uri: 'https://pbs.twimg.com/profile_images/1469364779655467017/ns6rie3__400x400.jpg',
                    }}
                />
            </View>

            <Text style={styles.header}>
                Find deals on hotels, homes, and much more...
            </Text>

            <View style={[layout.center, styles.searchbox]}>
                <Text>where are you going?</Text>
                <Icon name="search" size={30} color="#900" />
            </View>
        </>
    );
}
