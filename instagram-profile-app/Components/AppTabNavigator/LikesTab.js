import React, { Component } from 'react'
import { 
    Text, View, StyleSheet, ScrollView, Image,
    TouchableWithoutFeedback, Animated,
    Dimensions
} from 'react-native'

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
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="heart" style={{color: tintColor, fontSize: 20}} />
    }

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                {
                    hiphopImage.map((image, index) => {
                        return (
                            <TouchableWithoutFeedback key={image.id}>
                                <Animated.View style={styles.animatedView}>
                                    <Image source={image.src} style={styles.image} />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
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