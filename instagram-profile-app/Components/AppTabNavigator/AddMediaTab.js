import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export class AddMediaTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="plus-circle" style={{color: tintColor, fontSize: 24 }} />
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> AddMediaTab </Text>
            </View>
        )
    }
}

export default AddMediaTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});