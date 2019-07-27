import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Container, Left, Body, Right, Header, Content } from 'native-base'
import Icon from 'react-native-vector-icons/Feather';


export class LikesTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="heart" style={{color: tintColor, fontSize: 20}} />
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
                        <Text>Likes</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default LikesTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    iconTitle: {
        paddingHorizontal: 10,
        fontSize: 20
    },
    header: {
        backgroundColor: 'white'
    }
});