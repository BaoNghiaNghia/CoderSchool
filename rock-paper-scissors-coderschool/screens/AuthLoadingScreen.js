import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    ActivityIndicator,
    AsyncStorage
} from 'react-native'

export default class AuthLoadingScreen extends Component {
    constructor() {
        super();

        this.loadApp();
    }

    loadApp = async() => {
        const userToken = await AsyncStorage.getItem('userToken')

        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }
    
    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
