import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Left, Body, Right, Header, Content } from 'native-base'

export class AddMediaTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="plus-circle" style={{color: tintColor, fontSize: 32 }} />
    }

    render() {
        return (
            <SafeAreaView style={{flex: 2, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
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
                            <Text style={{ maxWidth: '50%' }}>Add Media</Text>
                        </View>
                    </Content>
                </Container>
            
            </SafeAreaView>
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