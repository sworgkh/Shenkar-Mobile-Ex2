import React from 'react'
import { Text, View, Button } from 'react-native'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button title="Settings" onPress={() => this.props.navigation.navigate('SettingsScreen')} />
      </View>
    )
  }
}

export default HomeScreen
