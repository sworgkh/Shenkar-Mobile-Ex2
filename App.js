import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'

import SearchScreen from './Screens/SearchScreen'

const AppStackNavigator = createStackNavigator(
  {
    // Home: HomeScreen,
    Home: SearchScreen,
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
