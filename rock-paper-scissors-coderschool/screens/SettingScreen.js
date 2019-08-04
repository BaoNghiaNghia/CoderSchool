import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    Button,
    AsyncStorage
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

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
                <Button title="Sign Out" onPress={this.onSignOut} ></Button>
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
