import React, { Component } from 'react'

import { 
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
    createAppContainer
  } from 'react-navigation';

import {
    View,
    TouchableOpacity
} from 'react-native';

import ActiveScreen from './src/containers/screens/ActiveScreen';
import AllScreen from './src/containers/screens/AllScreen';
import CompleteScreen from './src/containers/screens/CompleteScreen';
import SingleTodoScreen from './src/components/SingleTodoScreen';

import Icon from 'react-native-vector-icons/Feather'

const AppTabNavigator = createBottomTabNavigator({
    CompleteScreen: {
      screen: CompleteScreen
    },
    AllScreen: {
      screen: AllScreen
    },
    ActiveScreen: {
      screen: ActiveScreen
    },
},
{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: "#000",
        inactiveTintColor: "#ddd",
        showLabel: false,
        showIcon: true
    }
}
)

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({navigation}) => ({
          title: 'Todo',
          headerLeft: (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}>
                <View style={{paddingHorizontal: 10}}>
                  <Icon name="menu" size={22}/>
                </View>
            </TouchableOpacity>
          )
        })
    },
    SingleTodo: SingleTodoScreen
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator,
    Settings: AppStackNavigator
})

export default createAppContainer(AppDrawerNavigator)
