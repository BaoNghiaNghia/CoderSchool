import React, { Component } from 'react'
import { 
    Text, View, StyleSheet,
    Button, AsyncStorage
} from 'react-native'

export default class SignInScreen extends Component {
    signIn = async() => {
        await AsyncStorage.setItem('userToken', 'Nghĩa đẹp trai')

        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Complete sign in"
                    onPress={this.signIn}  />
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