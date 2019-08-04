import React, { Component } from 'react'
import { 
    Text, View, StyleSheet,
    Button
} from 'react-native'
import Colors from '../constants/Colors';

export default class WelcomeScreen extends Component {
    handleSignIn = () => {
        this.props.navigation.navigate('SignIn')
    }
    
    handleSignUp = () => {
        this.props.navigation.navigate('SignUp')

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button
                        transparent
                        title="Đăng nhập" 
                        onPress={this.handleSignIn} />
                </View>
                <View style={styles.button}>
                    <Button 
                        transparent
                        title="Đăng kí"
                        onPress={this.handleSignUp} />
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
