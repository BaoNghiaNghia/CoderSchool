import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    Button,
    AsyncStorage
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../constants/Colors';

export default class SettingScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="cog" style={{color: tintColor, fontSize: 20 }} />
    }
    
    onSignOut = async() => {
        AsyncStorage.clear()

        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button title="Thoát game" onPress={this.onSignOut} ></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        width: 200,
        borderColor: Colors.orange,
        borderRadius: 10
    }
})
