import React from 'react'
import { Text, View } from 'react-native'

class FavoriteImages extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
    headerStyle: {
      backgroundColor: 'lightblue'
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorites!</Text>
      </View>
    )
  }
}

export default FavoriteImages
