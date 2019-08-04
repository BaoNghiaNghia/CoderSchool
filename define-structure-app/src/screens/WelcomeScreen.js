import React, { Component } from 'react'
import { 
    Text, View, StyleSheet,
    Button
} from 'react-native'

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
                <Button title="Sign In" 
                    onPress={this.handleSignIn} />
                <Button title="Sign Up"
                    onPress={this.handleSignUp} />
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
        width: 40
    }
})
