import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native';

import HomeTab from './AppTabNavigator/HomeTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import SearchTab from './AppTabNavigator/SearchTab'

import { Icon } from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    animationEnabled: false,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: "#000",
        inactiveTintColor: "#ddd",
        showLabel: false,
        showIcon: true
    },
})

const AppContainerNav = createAppContainer(AppTabNavigator)

class MainScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        return (
            <SafeAreaView style={{flex: 2, backgroundColor: '#fff', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
                <AppContainerNav/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({})

export default MainScreen