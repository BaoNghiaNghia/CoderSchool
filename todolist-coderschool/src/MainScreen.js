import React, { Component } from 'react'

import { 
    createSwitchNavigator,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator
  } from 'react-navigation';

import {
    View,
    TouchableOpacity
} from 'react-native';

import ActiveScreen from './containers/screens/ActiveScreen';
import AllScreen from './containers/screens/AllScreen';
import CompleteScreen from './containers/screens/CompleteScreen';
import SingleTodoScreen from './components/SingleTodoScreen';

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
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    headerMode: 'none',
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
            header: null
            // title: 'Todolist',
            // headerLeft: (
            //     <TouchableOpacity
            //         onPress={() => navigation.toggleDrawer()}>
            //             <View style={{paddingHorizontal: 10}}>
            //             <Icon name="menu" size={22}/>
            //             </View>
            //     </TouchableOpacity>
            // )
        })
    },
    SingleTodo: SingleTodoScreen
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppStackNavigator,
})

export default createSwitchNavigator({
    App: AppDrawerNavigator
})

// const AppContainerNav = createAppContainer(AppTabNavigator)

// class MainScreen extends React.Component {
//     static navigationOptions = {
//         header: null,
//     }

//     render() {
//         return (
//             <AppContainerNav/>
//         )
//     }
// }

// export default MainScreen
