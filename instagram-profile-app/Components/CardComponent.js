import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';

import Icon from 'react-native-vector-icons/Feather'

export default class CardComponent extends Component {
    render() {
        const { imageSource, likes, userName } = this.props;

        const image = {
            '1': require('../assets/image1.jpg'),
            '2': require('../assets/image2.jpg'),
            '3': require('../assets/image3.png'),
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text>{userName}</Text>
                            <Text note>Jul 25, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image source={image[imageSource]} style={styles.image} />
                </CardItem>
                <CardItem style={styles.groupButton}>
                    <Left>
                        <Button transparent>
                            <Icon name="heart" style={styles.emotionButton} />
                        </Button>
                        <Button transparent>
                            <Icon name="message-circle" style={styles.emotionButton} />
                        </Button>
                        <Button transparent> 
                            <Icon name="send" style={styles.emotionButton} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={styles.text}>
                    <Text>{likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={styles.comment}>
                                {userName}{' '}
                            </Text>
                            Learn to swim by reading books on swimming techniques is impossible, but reading them in parallel with training in the pool results in gaining skills more effectively.
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: null,
        resizeMode: 'cover',
        flex: 1
    },
    emotionButton: {
        color: 'black',
        fontSize: 17
    },
    groupButton: {
        height: 45
    },
    text: {
        height: 20
    },
    comment: {
        fontWeight: '900'
    }
})

