import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResults from '../components/SearchResults/SearchResults'
import Header from '../components/Header'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'lightblue'
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <SegmentedControlTab
          styles={{ width: Dimensions.get('window').width - 20 }}
          values={['Grid', 'List']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        <View style={{ margin: '1%' }}>
          <SearchBar />
        </View>
        <SearchResults navigation={this.props.navigation} />
      </View>
    )
  }
}
