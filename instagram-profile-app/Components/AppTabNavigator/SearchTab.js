import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/Feather';

export class SearchTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="search" style={{color: tintColor, fontSize: 20,}} />
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> SearchTab </Text>
            </View>
        )
    }
}

export default SearchTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
