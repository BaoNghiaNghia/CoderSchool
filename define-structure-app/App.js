import React from 'react';
import {
  StyleSheet, Text, View,
  TouchableOpacity
} from 'react-native';

import { 
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Feather'

import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SettingScreen: {
    screen: SettingScreen
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({navigation}) => ({
      title: 'Your App',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
