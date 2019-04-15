import React from 'react'
import { Text, View } from 'react-native'

class SearchBar1 extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={this.props.style}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

export default SearchBar1
