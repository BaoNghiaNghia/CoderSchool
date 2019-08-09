import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './src/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
})

export default createAppContainer(AppStackNavigator)
