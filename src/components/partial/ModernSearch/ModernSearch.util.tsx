import React from 'react';
import { Text as _Text } from '#/components/base';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import layout from '#/styles/layout';
import { BlurView } from '@react-native-community/blur';
import { TextProps } from '#/components/base/Text/Text.types';
import RangeSlider from 'rn-range-slider';
import { GetawayItem } from '../HomeGetawayItem/HomeGetawayItem.types';
import { ScrollView } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';

/*

PLEASE NOTE: THIS WAS A LAST MINUTE THEME FOR SEARCH, COMPONENTS ARE NOT BROKEN UP AND ITS CHAOS.
- Luigi

*/

const Text = (props: TextProps) => <_Text color="#494A4C" {...props} />;

export const Header = () => (
    <View style={{ marginBottom: 28 }}>
        <View
            style={{
                position: 'absolute',
                right: 0,
                top: 6,
                backgroundColor: 'white',
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
                opacity: 0.95,
            }}>
            <Icon name="sliders" color="#4989E3" size={15} />
        </View>

        <Text varient="header" bold size={42} style={{ letterSpacing: 1.5 }}>
            Find
        </Text>
        <Text size={26} style={{ letterSpacing: 1.5 }}>
            your best stay
        </Text>
    </View>
);

export const Search = () => (
    <Section title="Location">
        <View
            style={[
                {
                    backgroundColor: 'white',
                    height: 45,
                    width: '100%',
                    borderRadius: 12,
                    paddingLeft: 15,
                },
            ]}>
            <View style={[layout.flexHorizontal, layout.centerVertical]}>
                <Icon
                    name="search"
                    size={22}
                    color="#DCDEE0"
                    style={{ marginRight: 10 }}
                />

                <TextInput placeholder="Hamilton str. 12" color="#DCDEE0" />
            </View>
        </View>
    </Section>
);

export const StayType = () => (
    <Section title="Property">
        <View style={{ height: 45 }}>
            <View style={[layout.flexHorizontal, layout.spaceApart]}>
                <Button>House</Button>
                <Button selected style={{ marginLeft: 10, marginRight: 10 }}>
                    Appartment
                </Button>
                <Button>Room</Button>
            </View>
        </View>
    </Section>
);

export const Section = ({ title, children, style }) => (
    <View style={{ marginBottom: 25 }}>
        <Text bold size={15} style={{ marginBottom: 10 }}>
            {title}
        </Text>
        <View style={[{ width: '100%' }, style]}>{children}</View>
    </View>
);

export const Button = ({ children, style, selected }) => (
    <View
        style={[
            { backgroundColor: selected ? '#c0d8fc' : null, borderRadius: 12 },
            style,
        ]}>
        <BlurView
            blurType={selected ? 'material' : 'materialLight'}
            style={[
                layout.centerVertical,
                layout.centerHorizontal,
                layout.flexGrow,
                {
                    borderRadius: 12,
                    paddingHorizontal: 20,
                    backgroundColor: '#C4DCFF',
                },
            ]}>
            <Text
                center
                color={selected ? '#5495EF' : '#494A4C'}
                bold={selected}>
                {children}
            </Text>
        </BlurView>
    </View>
);

const THUMB_RADIUS = 8;

const Thumb = () => (
    <BlurView blurType="light" style={{ borderRadius: THUMB_RADIUS }}>
        <View
            style={{
                width: THUMB_RADIUS * 2,
                height: THUMB_RADIUS * 2,
                borderRadius: THUMB_RADIUS,
                borderWidth: 2,
                borderColor: '#9AC8FC',
                backgroundColor: '#4989E3',
                shadowColor: '#4989E3',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,
                elevation: 11,
            }}
        />
    </BlurView>
);

const Rail = () => (
    <View
        style={{
            backgroundColor: '#4989E3',
            flex: 1,
            height: 3,
            borderRadius: 3,
        }}
    />
);

export const PriceRange = () => {
    const handleValueChange = React.useCallback((low, high) => {
        // setLow(low);
        // setHigh(high);
    }, []);

    return (
        <Section title="Price Range">
            <RangeSlider
                min={0}
                max={100}
                step={1}
                floatingLabel={false}
                renderLabel={() => null}
                renderThumb={Thumb}
                renderRail={Rail}
                renderRailSelected={Rail}
                onValueChanged={handleValueChange}
            />
            <View style={{ height: 18, marginTop: 4 }}>
                <View style={[layout.flexHorizontal, layout.spaceApart]}>
                    <Text size={10} style={{ opacity: 0.8 }}>
                        $ 1,000
                    </Text>
                    <Text size={10} style={{ opacity: 0.8 }}>
                        $ 10,000
                    </Text>
                </View>
            </View>
        </Section>
    );
};

export const Stays = ({ getaways }: { getaways: GetawayItem[] }) => {
    const navigation = useNavigation();

    return (
        <View
            style={[
                layout.flexGrow,
                {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: 'white',
                    paddingHorizontal: 34,
                    paddingVertical: 20,
                    top: -15,
                },
            ]}>
            <Text varient="header" bold style={{ marginBottom: 15 }}>
                Stays
            </Text>

            <ScrollView style={layout.flexGrow}>
                {getaways.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => navigation.navigate('Stay', item)}>
                        <View
                            style={[
                                layout.flexHorizontal,
                                {
                                    borderRadius: 15,
                                    backgroundColor: '#F2F2F2',
                                    marginBottom: 10,
                                    paddingHorizontal: 11,
                                    paddingVertical: 10,
                                    shadowColor: '#000000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.17,
                                    shadowRadius: 1.05,
                                    elevation: 4,
                                },
                            ]}>
                            <View style={{ marginRight: 15 }}>
                                <SharedElement id={`stay-image-${item.id}`}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{
                                            height: 70,
                                            width: 70,
                                            borderRadius: 9,
                                        }}
                                    />
                                </SharedElement>
                            </View>
                            <SharedElement
                                id={`body-${item.id}`}
                                style={layout.flexGrow}>
                                <View
                                    style={[
                                        { paddingVertical: 3 },
                                        layout.flexGrow,
                                    ]}>
                                    <Text bold size={18}>
                                        $ {item.price * 30}
                                    </Text>

                                    <View>
                                        <Text
                                            size={12}
                                            color="#AFAFAF"
                                            style={{
                                                opacity: 0.6,
                                                marginTop: 7,
                                            }}
                                            bold>
                                            {item.title}
                                        </Text>
                                        <View
                                            style={[
                                                layout.flexHorizontal,
                                                layout.centerVertical,
                                            ]}>
                                            <Icon
                                                name="star"
                                                size={10}
                                                color="#AFAFAF"
                                                style={{ marginRight: 5 }}
                                            />
                                            <Text
                                                bold
                                                size={12}
                                                color="#AFAFAF">
                                                {item.stars}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </SharedElement>

                            <View
                                style={[
                                    layout.centerVertical,
                                    layout.centerHorizontal,
                                    { marginRight: 10 },
                                ]}>
                                <Icon name="heart" size={20} color="#4989E3" />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
