import React, { Component } from 'react'
import { 
    Text, View, StyleSheet, ScrollView, Image,
    TouchableWithoutFeedback, Animated,
    Dimensions, C
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';

const hiphopImage = [
    { id: 1, src: require('../../assets/hiphop/1.jpg')},
    { id: 2, src: require('../../assets/hiphop/2.jpg')},
    { id: 3, src: require('../../assets/hiphop/3.jpg')},
    { id: 4, src: require('../../assets/hiphop/4.jpg')}
]

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export class LikesTab extends Component {
    constructor() {
        super();

        this.state = {
            activeImage: null
        }
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="heart" style={{color: tintColor, fontSize: 20}} />
    }

    componentWillMount() {
        this.allImages = {}
        this.oldPosition = {}
        this.position = new Animated.ValueXY()
        this.animation = new Animated.Value(0)
        this.dimensions = new Animated.ValueXY()
    }

    openImage = (index) => () => {
        this.allImages[index].measure((x, y, width, height, pageX, pageY) => {
            this.oldPosition.x = pageX
            this.oldPosition.y = pageY
            this.oldPosition.width = width
            this.oldPosition.height = height

            this.position.setValue({
                x: pageX,
                y: pageY
            })

            this.dimensions.setValue({
                x: width,
                y: height
            })

            this.setState({
                activeImage: hiphopImage[index]
            }, () => {
                this.viewImage.measure((dx, dy, dWidth, dHeight, dPageX, dPageY) => {
                    Animated.parallel([
                        Animated.timing(this.position.x, {
                            toValue: dPageX,
                            duration: 300
                        }),
                        Animated.timing(this.position.y, {
                            toValue: dPageY,
                            duration: 300
                        }),
                        Animated.timing(this.dimensions.x, {
                            toValue: dWidth,
                            duration: 300
                        }),
                        Animated.timing(this.dimensions.y, {
                            toValue: dHeight,
                            duration: 300
                        }),
                        Animated.timing(this.animation, {
                            toValue: 1,
                            duration: 300
                        })
                    ]).start()
                })
            })
        })
    }

    render() {
        const { activeImage } = this.state

        const activeImageStyle = {
            width: this.dimensions.x,
            height: this.dimensions.y,
            left: this.position.x,
            right: this.position.y,
        }

        const animatedContentY = this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-150, -40]
        })

        const animatedContentOpacity = this.animation.interpolate({
            inputRange:  [0, 0.5, 1],
            outputRange: [0, 1, 1]
        })

        const animatedContentStyle = {
            opacity: animatedContentOpacity,
            transform: [{
                translateY: animatedContentY
            }]
        }

        return (
            <React.Fragment>
                <ScrollView style={styles.scrollContainer}>
                    {
                        hiphopImage.map((image, index) => {
                            return (
                                <TouchableWithoutFeedback 
                                    key={image.id}
                                    onPress={this.openImage(index)}
                                >
                                    <Animated.View style={styles.animatedView}>
                                        <Image 
                                            ref={(image) => (this.allImages[index] = image)}
                                            source={image.src}
                                            style={styles.image} />
                                    </Animated.View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </ScrollView>

                <View
                    style={StyleSheet.absoluteFill}
                    pointerEvents={ activeImage ? 'auto' : 'none' }>
                    <View 
                        style={{flex: 2, borderWidth: 1}}
                        ref={(image) => (this.viewImage = image)}>
                        <Animated.Image
                            source={activeImage ? activeImage.src : null}
                            style={[{resizeMode: 'cover', top: 0, left: 0, height:undefined, width: undefined}, activeImageStyle]}
                        >

                        </Animated.Image>
                    </View>
                    <Animated.View 
                        style={[
                            {flex: 1, backgroundColor: 'white', padding: 20, paddingTop: 50},
                            animatedContentStyle
                        ]}>
                        <Text style={{fontSize: 24, paddingBottom: 10}}>
                            Eiffel tower
                        </Text>
                        <Text>
                            Paris, France
                        </Text>
                        <Text>
                            Lorem ipsum color sit amet, consectetur odipiscing elit. Proin suscipit ullamcorper
                        </Text>
                    </Animated.View>
                </View>
            </React.Fragment>
        )
    }
}

export default LikesTab

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    animatedView: {
        height: SCREEN_HEIGHT - 150,
        width: SCREEN_WIDTH,
        padding: 15
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 20
    }
});