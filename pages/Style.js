import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const arrow = {
    position: 'absolute',
    zIndex: 9999,
    paddingHorizontal: 15,
    paddingVertical: 25
};

const historyview = {
    position: 'absolute',
    zIndex: 9999,
    right: 10,
}

const historytext = {
    color: '#e06732',
    fontSize: hp('2.5%'),
    paddingHorizontal: 15,
    paddingVertical: 25
}

const starbackground = {
    position: 'absolute',
    right: 0,
    zIndex: 9999,
    left: 0,
    top: windowHeight * 0.08
}

const star1 = {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    right: windowWidth * 0.55,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#c0c0c0'
}

const star2 = {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    right: windowWidth * 0.47,
    width: 56, height: 56,
    borderRadius: 28,
    backgroundColor: '#43b681'
}

const star3 = {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    width: 56, height: 56,
    borderRadius: 28,
    right: windowWidth * 0.39,
    backgroundColor: '#569dce'
}

const star4 = {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    width: 56, height: 56,
    borderRadius: 28,
    right: windowWidth * 0.31,
    backgroundColor: '#993399'
}

const starlabel = {
    position: 'absolute',
    zIndex: 9999,
    top: windowHeight * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
}

const startext = {
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'SFPro'
}

const carouselview = {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    zIndex: 9999,
    top: windowHeight * 0.36
}

const restoreview = {
    position: 'absolute',
    top: windowHeight * 0.88,
    zIndex: 9999
}

const restoretext = {
    color: '#d0602f',
    textAlign: 'center',
    fontSize: 17
}


const restoretext1 = {
    textAlign: 'center',
    fontSize: 15,
    color: '#747c81'
}

const restoretext2 = {
    textAlign: 'center',
    fontSize: 15,
    color: '#7e868a'
}

const startext1 = {
    fontSize: 16,
    textAlign: 'center',
    color: '#3F3F3F',
    marginTop: 10
}

const startext2 = {
    fontSize: 16,
    textAlign: 'center',
    color: '#3F3F3F'
}

const startext3 = {
    fontSize: 16,
    textAlign: 'center',
    color: '#9d9d9d'
}

const dashline = {
    position: 'absolute',
    width: "100%",
    height: 2,
    backgroundColor: "#df4741",
    top: 12
}
const carouseltext = {
    fontSize: 19,
    color: 'white',
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.5
}

const carouselboldtext = {
    fontSize: 19,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.5
}

const buttontext = {
    color: 'white',
    fontSize: 21,
    padding: 10,
    paddingHorizontal: 30
}




const Style = {
    arrow,
    historyview,
    historytext,
    starbackground,
    star1,
    star2,
    star3,
    star4,
    starlabel,
    startext,
    carouselview,
    restoreview,
    restoretext,
    restoretext1,
    restoretext2,
    startext1,
    startext2,
    startext3,
    dashline,
    carouseltext,
    carouselboldtext,
    buttontext,


};


export default Style;