import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'

import { Container, Content, Header, Left, Body, Right, Button  } from 'native-base'

import Icon from 'react-native-vector-icons/Feather'
import CardComponent from '../CardComponent';

import axios from 'axios';

const avatar = require('../../assets/me.jpg')
const galleryImages = [
    require('../../assets/gallery/list1-min.jpg'),
    require('../../assets/gallery/list2-min.jpg'),
    // require('../../assets/gallery/list3-min.jpg'),
    require('../../assets/gallery/list4-min.jpg'),
    require('../../assets/gallery/list5-min.jpg'),
    require('../../assets/gallery/list6-min.jpg'),
    // require('../../assets/gallery/list7-min.jpg'),
    require('../../assets/gallery/list8-min.jpg'),
    require('../../assets/gallery/list9-min.jpg'),
    require('../../assets/gallery/list10-min.jpg'),
    require('../../assets/gallery/list11-min.jpg'),
    require('../../assets/gallery/list12-min.jpg'),
    require('../../assets/gallery/list13-min.jpg'),
    require('../../assets/gallery/list14-min.jpg'),
    require('../../assets/gallery/list15-min.jpg'),
    require('../../assets/gallery/list16-min.jpg'),
    require('../../assets/gallery/list17-min.jpg'),
    require('../../assets/gallery/list18-min.jpg'),
    require('../../assets/gallery/list19-min.jpg'),
    // require('../../assets/gallery/list20-min.jpg'),
    require('../../assets/gallery/list21-min.jpg'),

]

const { width, height } = Dimensions.get('window');

export class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="user" style={{color: tintColor, fontSize: 20 }} />
    }

    constructor(props) {
        super(props);

        this.state = {
             activeIndex: 0
        }
    }

    fetchImageFromUnsplash = () => {
        axios.get('')
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log('request completed!')
        })
    }

    segmentClicked = (index) => () => {
        this.setState({
            activeIndex: index
        })
    }

    renderFirstSection = () => {
        return galleryImages.map((image, index) => {
            return (
                <View key={index} style={[ 
                    {width: (width) / 3}, { height: (height) / 3},
                    index % 3 !== 0 ? { paddingLeft: 3 } : { paddingLeft: 0 },
                    { marginBottom: 3 }
                 ]}>
                    <Image 
                        style={styles.galleryImage}
                        source={image} />
                </View>
            )
        })
    }
    
    renderSection = () => {
        const { activeIndex } = this.state;

        if (activeIndex === 0) {
            return(
                <View style={styles.firstSection}>
                    {this.renderFirstSection()}
                </View>
            )
        } else if (activeIndex === 1) {
            return (
                <View>
                    <CardComponent imageSource='1' likes="100" userName="Bảo đẹp trai"/>
                    <CardComponent imageSource='2' likes="150" userName="Hanna Trang"/>
                    <CardComponent imageSource='3' likes="600" userName="Ali Cô Ba"/>
                </View>
            )
        }
    }

    render() {
        const { activeIndex } = this.state;

        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="user-plus" style={styles.iconTitle}></Icon>
                    </Left>
                    <Body>
                        <Text>Bảo đẹp trai</Text>
                    </Body>
                    <Right>
                        <Icon name="pie-chart" style={styles.iconTitle}></Icon>
                    </Right>
                </Header>
                <Content>
                    <View>
                        <View style={styles.rowDirection}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image source={avatar} style={styles.avatar} />
                            </View>
                            <View style={{flex: 3 }}>
                                <View style={styles.amountUser}>
                                    <View style={styles.alignCenter}>
                                        <Text>40</Text>
                                        <Text style={styles.amountUserContent}>posts</Text>
                                    </View>
                                    <View style={styles.alignCenter}>
                                        <Text>120</Text>
                                        <Text style={styles.amountUserContent}>followers</Text>
                                    </View>
                                    <View style={styles.alignCenter}>
                                        <Text>9</Text>
                                        <Text style={styles.amountUserContent}>following</Text>
                                    </View>
                                </View>

                                <View style={styles.rowDirection}>
                                    <Button bordered dark style={styles.editProfileButton}>
                                        <Text>Edit Profile</Text>
                                    </Button>

                                    <Button bordered dark style={styles.settingButton}>
                                        <Icon name="settings" style={{fontSize: 17}}/>
                                    </Button>
                                </View>
                            </View>
                        </View>

                        <View style={{ paddingTop: 10, paddingBottom: 10, paddingHorizontal: 14 }}>
                            <Text style={{ fontWeight: 'bold' }}>Bảo đẹp trai</Text>
                            <Text>Lark | Computer Jock | Travel Enthusiast</Text>
                            <Text>www.gachi.com</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                        <Button 
                            transparent
                            onPress={this.segmentClicked(0)}
                            active={activeIndex == 0}>
                            <Icon name="grid"
                                style={[activeIndex == 0 ? {color: '#79BCFF'} : { color: 'grey' }, { fontSize: 20}]}></Icon>
                        </Button>
                        <Button 
                            transparent
                            onPress={this.segmentClicked(1)}
                            active={activeIndex == 1}>
                            <Icon name="align-left"
                                style={[activeIndex == 1 ? {color: '#79BCFF'} : { color: 'grey' }, { fontSize: 20}]}></Icon>
                        </Button>
                        <Button 
                            transparent
                            onPress={this.segmentClicked(2)}
                            active={activeIndex == 2}>
                            <Icon name="users"
                                style={[activeIndex == 2 ? {color: '#79BCFF'} : { color: 'grey' }, { fontSize: 20}]}></Icon>
                        </Button>
                        <Button 
                            transparent
                            onPress={this.segmentClicked(3)}
                            active={activeIndex == 3}>
                            <Icon name="bookmark"
                                style={[activeIndex == 3 ? {color: '#79BCFF'} : { color: 'grey' }, { fontSize: 20}]}></Icon>
                        </Button>
                    </View>

                    {this.renderSection()}
                </Content>
            </Container>
        )
    }
}

export default ProfileTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }, 
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 37.5
    },
    amountUser: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    amountUserContent: {
        fontSize: 12,
        color: 'grey'
    },
    rowDirection: {
        flexDirection: 'row',
        paddingTop: 10
    },
    alignCenter: {
        alignItems: 'center'
    },
    editProfileButton: {
        flex: 3.2,
        marginLeft: 10,
        justifyContent: 'center',
        height: 30
    },
    settingButton: {
        flex: 0.7,
        height: 30,
        marginRight: 10,
        marginLeft: 5,
        justifyContent: 'center',
    },
    firstSection: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    galleryImage: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    header: {
        backgroundColor: 'white'
    },
    iconTitle: { 
        paddingHorizontal: 10,
        fontSize: 20
    }
});