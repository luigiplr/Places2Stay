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
            <View style={[layout.flexHorizontal, layout.centerHorizontal]}>
                <StaggeredMenuIcon width={20} height={8} />

                <View
                    style={[
                        layout.flexHorizontal,
                        layout.centerHorizontal,
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

            <View
                style={[
                    layout.flexHorizontal,
                    layout.centerHorizontal,
                    layout.centerVertical,
                    styles.searchbox,
                ]}>
                <Text style={layout.flexGrow} size={14} color="#7581A0">
                    where are you going?
                </Text>

                <Icon name="search" size={22} color="#39A0FF" />
            </View>
        </>
    );
}
