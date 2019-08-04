import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Sign Up Screen nè </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})