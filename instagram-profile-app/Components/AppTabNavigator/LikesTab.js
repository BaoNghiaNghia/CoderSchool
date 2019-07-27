import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { Container, Left, Body, Right, Header } from 'native-base'
import Icon from 'react-native-vector-icons/Feather';


export class LikesTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="heart" style={{color: tintColor, fontSize: 20}} />
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="camera" style={{ paddingLeft: 10 }}></Icon>
                    </Left>
                    <Body>
                        <Text>Instagram</Text>
                    </Body>
                    <Right>
                        <Icon name="send" style={{ paddingRight: 10 }}></Icon>
                    </Right>
                </Header>
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
    }
});