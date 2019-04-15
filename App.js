import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SettingsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange'
      }
    }
  }
)

const AppContainer = createAppContainer(createAppContainer(AppStackNavigator))

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
