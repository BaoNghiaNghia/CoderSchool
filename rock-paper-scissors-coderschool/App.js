import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { 
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Feather'

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import SettingScreen from './screens/SettingScreen';
import GameScreen from './screens/GameScreen';

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

const AppTabNavigator = createBottomTabNavigator({
  GameScreen: {
    screen: GameScreen
  },
  SettingScreen: {
    screen: SettingScreen
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

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Rock, Paper, Scissors',
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}>
            <View style={{paddingHorizontal: 10}}>
              <Icon name="menu" size={22}/>
            </View>
        </TouchableOpacity>
      )
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
})
