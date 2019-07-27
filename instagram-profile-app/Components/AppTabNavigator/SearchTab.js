import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/Feather';

import { Container, Left, Body, Right, Header, Content } from 'native-base'

export class SearchTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="search" style={{color: tintColor, fontSize: 20,}} />
    }

    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Icon name="search" style={styles.iconTitle}></Icon>
                    </Left>
                    <Body>
                        <Text>Search</Text>
                    </Body>
                    <Right>
                        <Icon name="send" style={styles.iconTitle}></Icon>
                    </Right>
                </Header>

                <Content>
                    <View style={styles.container}>
                        <Text style={{ maxWidth: '50%' }}>Search</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default SearchTab

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
