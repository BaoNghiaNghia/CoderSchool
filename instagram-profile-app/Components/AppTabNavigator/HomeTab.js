import React, { Component } from 'react'
import { Platform, Text, View, StyleSheet, ScrollView } from 'react-native'

import { SafeAreaView } from 'react-navigation'

import Icon from 'react-native-vector-icons/Feather';

import { Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

const storyImage = [
    require('../../assets/story1.jpg'),
    require('../../assets/story4.jpg'),
    require('../../assets/story5.jpg'),
    require('../../assets/story6.jpg'),
    require('../../assets/story7.jpg'),
    require('../../assets/story2.jpg'),
    require('../../assets/story3.jpg')
]

export class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="home" style={{color: tintColor, fontSize: 20}} />
    }

    storyImageRender = () => {
        return storyImage.map((image, index) => {
            return (
                <View key={index}>
                    <Thumbnail
                        style={styles.story}
                        source={image} />
                </View>
            )
        });
    }
   
    render() {
        return (

            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="camera" style={styles.iconTitle}></Icon>
                    </Left>
                    <Body>
                        <Text>Instagram</Text>
                    </Body>
                    <Right>
                        <Icon name="send" style={styles.iconTitle}></Icon>
                    </Right>
                </Header>

                <Content>
                    <View style={styles.container}>
                        <View style={styles.main}>
                            <Text style={styles.fontWeightBold}>Stories</Text>
                            <View style={styles.watchAllIconWrapper}>
                                <Icon name="play" style={styles.watchAllIcon}></Icon>
                                <Text style={styles.fontWeightBold}> Watch All</Text>
                            </View>
                        </View>
                        <View style={styles.singleStory}>
                            <ScrollView 
                                horizontal={true} 
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems:'center',
                                    paddingStart: 10,
                                    paddingEnd: 10
                                }}>

                                {this.storyImageRender()}
                                
                            </ScrollView>
                        </View>
                    </View>

                    <CardComponent imageSource='1' likes="100" userName="Bảo đẹp trai"/>
                    <CardComponent imageSource='2' likes="150" userName="Hanna Trang"/>
                    <CardComponent imageSource='3' likes="600" userName="Ali Cô Ba"/>
                </Content>

            </Container>
        )
    }
}

export default HomeTab

const styles = StyleSheet.create({
    container: {
        height: 100
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 17
    },
    singleStory: {
        flex: 3
    },
    story: {
        marginHorizontal: 11,
        borderColor: 'red',
        borderWidth: 2,
        paddingHorizontal: 10,
    },
    watchAllIconWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    watchAllIcon: {
        fontSize: 13
    },
    fontWeightBold: {
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: 'white'
    },
    iconTitle: {
        paddingHorizontal: 10,
        fontSize: 20
    }
});