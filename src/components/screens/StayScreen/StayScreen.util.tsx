import React from 'react';
import { Image, View } from 'react-native';

import styles from './StayScreen.styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

import layout from '#/styles/layout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Card, Text } from '#/components/base';
import { SharedElement } from 'react-navigation-shared-element';

export const StayScreenBackButtonHeader = () => {
    const navigation = useNavigation();
    const safeArea = useSafeAreaInsets();

    return (
        <View style={[styles.backbutton, { top: safeArea.top + 20 }]}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                    layout.centerHorizontal,
                    layout.centerVertical,
                    { width: '100%', height: '100%' },
                ]}>
                <BlurView
                    blurAmount={20}
                    blurType="light"
                    style={styles.backBlur}
                />

                <Icon
                    name="arrow-left"
                    size={19}
                    color="black"
                    style={{ opacity: 0.8 }}
                />
            </TouchableOpacity>
        </View>
    );
};

export const RatingStars = ({ stars }: { stars: number }) => (
    <View style={[layout.flexHorizontal, layout.noFlexGrow]}>
        {[...Array(stars)].map((_, i) => (
            <Icon name="star" size={15} color="#F3B13C" key={i} />
        ))}
    </View>
);

export const Avatar = ({ uri, style }: { uri: string; style?: object }) => (
    <Image source={{ uri }} style={[styles.avatar, style]} />
);

const reviewAvatars = [
    'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
    'https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=',
    'https://image.shutterstock.com/image-photo/portrait-young-beautiful-cute-cheerful-260nw-666258808.jpg',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

export const Reviews = ({ id }: { id: string }) => (
    <SharedElement id={`stay-rating-${id}`}>
        <Card style={[layout.flexHorizontal, layout.spaceApart]}>
            <View style={layout.noFlexGrow}>
                <RatingStars stars={4} />
                <View style={[layout.flexHorizontal, layout.centerVertical]}>
                    <Text style={styles.reviewers} size={11}>
                        129 Reviews
                    </Text>

                    <Icon
                        name="chevron-right"
                        size={15}
                        color="#9E9BA6"
                        style={{ top: 2, marginLeft: 4 }}
                    />
                </View>
            </View>

            <View>
                <View style={[layout.flexHorizontal, { left: 32 }]}>
                    {reviewAvatars.map((uri, i) => (
                        <Avatar
                            uri={uri}
                            key={uri}
                            style={i === 0 ? undefined : { left: -10 * i }}
                        />
                    ))}
                </View>
            </View>
        </Card>
    </SharedElement>
);

export const SectionHeader = ({
    children,
    more,
}: {
    children: string;
    more?: boolean;
}) => (
    <View
        style={[
            layout.flexHorizontal,
            styles.sectionHeader,
            layout.centerVertical,
            layout.spaceApart,
        ]}>
        <Text varient="header" size={18} bold>
            {children}
        </Text>

        {more && (
            <Text bold color="#39A0FF">
                More
            </Text>
        )}
    </View>
);
