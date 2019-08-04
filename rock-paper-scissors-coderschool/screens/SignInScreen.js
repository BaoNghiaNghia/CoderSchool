import React, { Component } from 'react'
import { 
    Text, View, StyleSheet,
    Button, AsyncStorage
} from 'react-native'
import Colors from '../constants/Colors';

export default class SignInScreen extends Component {
    signIn = async() => {
        await AsyncStorage.setItem('userToken', 'Nghĩa đẹp trai')

        this.props.navigation.navigate('AuthLoading')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button transparent title="Vào game"
                    onPress={this.signIn}  />
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