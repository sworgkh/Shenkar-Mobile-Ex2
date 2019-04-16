import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import OneImage from './Screens/OneImage'
import FavoriteImages from './Screens/FavoriteImages'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
store.subscribe(() => console.log('store', store.getState()))

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    OneImage,
    FavoriteImages
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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
