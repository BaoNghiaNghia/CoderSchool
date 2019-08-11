import React, { Component } from 'react'
import { 
    Text, StyleSheet, View,
    Platform, StatusBar, SafeAreaView
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

export default class ActiveScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="umbrella" style={{color: tintColor, fontSize: 20 }} />
    }

    render () {
        return (
            // <SafeAreaView style={{
			// 	flex: 1, 
			// 	backgroundColor: '#CECECE', 
			// 	paddingTop: Platform.OS === 'android' 
			// 		? StatusBar.currentHeight 
            //         : 0
            //     }}
			// >
                <View style={styles.container}>
                    <Text> Avtive screen </Text>
                </View>
            // </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
});
