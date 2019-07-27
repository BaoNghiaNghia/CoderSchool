import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import { Container, Left, Body, Right, Header, Content } from 'native-base'

export class AddMediaTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="plus-circle" style={{color: tintColor, fontSize: 30 }} />
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
                        <Text>Add Media</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default AddMediaTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTitle: {
        paddingHorizontal: 10,
        fontSize: 20
    },
    header: {
        backgroundColor: 'white'
    }
});