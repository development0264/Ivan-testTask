import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import GlobalFont from 'react-native-global-font';
import Style from './Style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Screen3 extends React.Component {

    containerStyle = (prop) => {
        return {
            height: windowHeight * 0.5,
            borderRadius: 50,
            padding: 20,
            backgroundColor: prop.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        };
    }


    _renderItem = ({ item, index }) => {
        return (
            <View style={this.containerStyle(item)}>
                <Text style={styles.carouselBigTextStyle}>{item.title}</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Text style={styles.carouselMediumTextStyle}>Start Now </Text>
                    <Text style={styles.carouselMediumBoldTextStyle}>{item.price}</Text>
                    <Text style={styles.carouselMediumTextStyle}>/month</Text>
                </View>
                <View style={{ margin: 15 }}>


                    <Text style={styles.carouseltext}>Lorem ipsum dolor</Text>
                    <Text style={styles.carouseltext}>sit amet, conse</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.carouseltext}>ctetur adipisc a </Text>
                        <Text style={styles.carouselboldtext}>100</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.carouselboldtext}>monastery</Text>
                        <Text style={styles.carouseltext}> every</Text>
                    </View>
                    <Text style={styles.carouseltext}>lick!</Text>
                </View>
                <View style={{ backgroundColor: '#3ba071', borderRadius: 25 }}>
                    <Text style={styles.buttontext}>
                        Upgrade
                   </Text>
                </View>

            </View>
        );
    }


    render() {

        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.arrow}>
                        <Image source={require('../images/arrow.png')} style={{ width: 25, height: 25 }} />
                    </View>
                    <View style={styles.historyview}>
                        <Text style={styles.historytext}>History</Text>
                    </View>
                </View>

                <View style={styles.starbackground}>
                    <View style={styles.star1}>
                    </View>
                    <View style={styles.star2}>
                        <FontAwesomeIcon
                            style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}
                            icon={faStar}
                            color={'#a5dcc2'}
                            size={30} />
                    </View>
                    <View style={styles.star3}>
                        <FontAwesomeIcon
                            style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}
                            icon={faStar}
                            color={'#96c2e0'}
                            size={30} />
                    </View>
                    <View style={styles.star4}>
                        <FontAwesomeIcon
                            style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}
                            icon={faStar}
                            color={'#fff'}
                            size={30} />
                    </View>
                </View>


                <View style={styles.starlabel}>
                    <Text style={styles.startext}>Not Your Star</Text>
                    <Text style={styles.startext1}>Who needs friends?</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                        <Text style={styles.startext2}>Yup, ditch the middle </Text>
                        <View style={{ position: "relative" }}>
                            <Text style={styles.startext3}>man</Text>
                            <Text style={styles.dashline}></Text>
                        </View>
                        <Text> today,</Text>
                    </View>
                    <Text style={styles.startext2}>before you get in troublez!</Text>
                </View>

                <View style={styles.carouselview}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={Data}
                        firstItem={1}
                        renderItem={this._renderItem}
                        sliderWidth={windowWidth}
                        itemWidth={windowWidth * 0.75}
                        alignItems='flex-start'
                        inactiveSlideShift={-15} />
                </View>

                <View style={styles.restoreview}>
                    <Text style={styles.restoretext}>Restore Purchases</Text>
                    <View style={{ marginTop: 10, width: windowWidth }}>
                        <Text style={styles.restoretext1}>Lorem ipsum dolor sit amet, consectetur</Text>
                        <Text style={styles.restoretext2}>adipisc elit, sed do eiusmod tempor</Text>
                    </View>
                </View>
                <View style={{ height: windowHeight * 0.5, }}>
                    <Image source={require('../images/Rectangle.png')} style={{ width: '100%', height: '100%' }} />
                </View>












            </View>
        );
    }

}

const styles = StyleSheet.create({
    carouselBigTextStyle: {
        color: 'white',
        fontSize: 28,
        fontWeight: "500",
    },
    carouselMediumTextStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: "500",
        marginTop: 5
    },
    carouselMediumBoldTextStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 2,

    },
    arrow: {
        ...Style.arrow,
    },
    historyview: {
        ...Style.historyview
    },
    historytext: {
        ...Style.historytext
    },
    starbackground: {
        ...Style.starbackground
    },
    star1: {
        ...Style.star1
    },
    star2: {
        ...Style.star2
    },
    star3: {
        ...Style.star3
    },
    star4: {
        ...Style.star4
    },
    starlabel: {
        ...Style.starlabel
    },
    startext: {
        ...Style.startext
    },
    carouselview: {
        ...Style.carouselview
    },
    restoreview: {
        ...Style.restoreview
    },
    restoretext: {
        ...Style.restoretext
    },
    restoretext1: {
        ...Style.restoretext1
    },
    restoretext2: {
        ...Style.restoretext2
    },
    startext1: {
        ...Style.startext1
    },
    startext2: {
        ...Style.startext2
    },
    startext3: {
        ...Style.startext3
    },
    dashline: {
        ...Style.dashline
    },
    carouseltext: {
        ...Style.carouseltext
    },
    carouselboldtext: {
        ...Style.carouselboldtext
    },
    buttontext: {
        ...Style.buttontext
    }

});

const Data = [
    {
        id: 0,
        title: 'Good friends',
        price: '$2.35',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisc a <B><U>100 monastery</U></B> every lick!',
        backgroundColor: '#D9D9D9',
    },
    {
        id: 1,
        title: 'Bad Friends',
        price: '$6.95',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisc a <B><U>100 monastery</U></B> every lick!',
        backgroundColor: '#42B480',
    },
    {
        id: 2,
        title: 'New friends',
        price: '$8.35',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisc a <B><U>100 monastery</U></B> every lick!',
        backgroundColor: '#569dce',
    }
]
