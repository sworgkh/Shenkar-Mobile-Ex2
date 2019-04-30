import React from 'react'
import { StyleSheet, View } from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResults from '../components/SearchResults/SearchResults'
import Header from '../components/Header'
import { PropTypes } from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  searchBar: { margin: '1%' }
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
      selectedIndex: 0,
      icon: 'heart'
    }
  }

  handleIndexChange(index) {
    this.setState({
      ...this.state,
      selectedIndex: index
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          navigation={this.props.navigation}
          onPress={() => this.props.navigation.navigate('FavoriteImages')}
          iconName={this.state.icon}
        />
        <SegmentedControlTab
          // styles={{ width: Dimensions.get('window').width - 100 }}
          values={['Grid', 'List']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
        <View style={styles.searchBar}>
          <SearchBar />
        </View>
        <SearchResults gridOrList={this.state.selectedIndex} navigation={this.props.navigation} />
      </View>
    )
  }
}
App.propTypes = {
  navigation: PropTypes.object
}
