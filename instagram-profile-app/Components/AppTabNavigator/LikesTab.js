import React, { Component } from 'react'
import { 
    Text, View, StyleSheet, ScrollView, Image,
    TouchableWithoutFeedback, Animated,
    Dimensions
} from 'react-native'

import { Button } from 'native-base'

import Icon from 'react-native-vector-icons/Feather';

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

    closeImage = () => () => {
        Animated.parallel([
            Animated.timing(this.position.x, {
                toValue: this.oldPosition.x,
                duration: 300
            }),
            Animated.timing(this.position.y, {
                toValue: this.oldPosition.y,
                duration: 300
            }),
            Animated.timing(this.dimensions.x, {
                toValue: this.oldPosition.width,
                duration: 300
            }),
            Animated.timing(this.dimensions.y, {
                toValue: this.oldPosition.height,
                duration: 300
            }),
            Animated.timing(this.animation, {
                toValue: 0,
                duration: 300
            })
        ]).start(() => {
            this.setState({
                activeImage: null
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
            outputRange: [-150, 0]
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

        const animatedCrossOpacity = {
            opacity: this.animation
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
                        style={{flex: 2, borderWidth: 0.1}}
                        ref={(image) => (this.viewImage = image)}>
                        <Animated.Image
                            source={activeImage ? activeImage.src : null}
                            style={[
                                styles.activeImage,
                                activeImageStyle
                            ]}
                        >
                        </Animated.Image>

                        <TouchableWithoutFeedback
                            onPress={this.closeImage()}    
                        >
                            <Animated.View style={[
                                styles.removeImageIconContainer,
                                animatedCrossOpacity
                            ]}>
                                <Icon name="x-circle" style={styles.removeImageIcon} />
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                    <Animated.View 
                        style={[
                            styles.contentAnimated,
                            animatedContentStyle
                        ]}>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                <View>
                                    <Text style={{fontSize: 27, fontWeight: 'bold'}}>
                                        Eiffel tower
                                    </Text>
                                    <View style={styles.locationGroup}>
                                        <Icon name="map-pin" style={styles.grayColor}/>
                                        <Text style={[
                                            styles.locationContent,
                                            styles.grayColor
                                        ]}>
                                            {' '}Paris, France
                                        </Text>
                                    </View>
                                </View>
                                <View>
                                    <Button style={styles.cloudDownload}>
                                        <Icon name="download-cloud" style={[{fontSize: 22}, styles.whiteColor]}/>
                                    </Button>
                                </View>
                            </View>
                            <View>
                                <Text style={{ marginTop: 20 }}>
                                    Learn to swim by reading books on swimming techniques is impossible, but reading them in parallel with training in the pool results in gaining skills more effectively.
                                </Text>
                                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'flex-start' }}>
                                    <Text style={styles.chip}>#photograpy</Text>
                                    <Text style={styles.chip}>#sea</Text>
                                </View>

                                <View style={styles.emotionButtonContainer}>
                                    <View style={styles.emotionButtonGroup}>
                                        <Button transparent>
                                            <Icon name="heart" style={styles.emotionButton} />
                                        </Button>
                                        <Button transparent style={{marginLeft: 20}}>
                                            <Icon name="message-circle" style={styles.emotionButton} />
                                        </Button>
                                        {/* <Button transparent> 
                                            <Icon name="send" style={styles.emotionButton} />
                                        </Button> */}    
                                    </View>
                                    <View>
                                        <Button transparent> 
                                            <Icon name="bookmark" style={styles.emotionButton} />
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </View>


                    </Animated.View>
                </View>
            </React.Fragment>
        )
    }
}

export default LikesTab

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        marginTop: 25
    },
    animatedView: {
        height: SCREEN_HEIGHT - 250,
        width: SCREEN_WIDTH,
        padding: 15
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 20
    },
    activeImage: {
        resizeMode: 'cover', top: 0, left: 0, height:undefined, width: undefined, zIndex: 1001,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    contentAnimated: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 50,
        zIndex: 1000
    },
    removeImageIcon: {
        color: 'white',
        fontSize: 25
    },
    removeImageIconContainer: {
        position: 'absolute',
        top: 40,
        right: 30,
        zIndex: 1001
    },
    locationGroup: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',

    },
    locationContent: {
        paddingHorizontal: 5,
        paddingBottom: 3
    },
    grayColor: {
        color: 'gray'
    },
    whiteColor: {
        color: 'white'
    },
    cloudDownload: {
        height: 55,
        width: 55,
        justifyContent: 'center',
        backgroundColor: '#3c72ff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 5,
        shadowColor: '#3c72ff',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 15
    },
    emotionButton: {
        color: 'black',
        fontSize: 23
    },
    chip: {
        fontSize: 10,
        color: '#BCBCBC',
        backgroundColor: '#EEEEEE',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 7,
        marginRight: 10
    },
    emotionButtonContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    emotionButtonGroup:{
        flexDirection: 'row',
        justifyContent:'space-between'
    }
});