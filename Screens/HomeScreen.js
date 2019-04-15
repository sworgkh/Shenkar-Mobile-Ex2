import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
// import SearchBar from '../modules/SearchBar'
import { SearchBar } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  searchBar: {
    height: '10%',
    backgroundColor: 'red'
  },
  data: {
    flexWrap: 'wrap',
    flex: 1,
    flexDirection: 'row',
    height: '90%',
    backgroundColor: 'gray'
  }
})

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  updateSearch = search => {
    this.setState({ search })
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <SearchBar style={styles.searchBar} />
  //       <Button title="Settings" onPress={() => this.props.navigation.navigate('SettingsScreen')} />
  //       <View style={styles.data} />
  //     </View>
  //   )
  // }

  search() {
    alert("Searched")
    console.log('searched')
  }

  render() {
    const { search } = this.state

    return (
      <SearchBar
        // placeholder="Type Here..."
        // onChangeText={this.updateSearch}
        // searchIcon={this.search}
        // value={search}

        round //To make the searchbar corner round (default square)
        searchIcon={{ size: 24 }} //Size of the search icon
        onChangeText={text => this.updateSearch(text)}
          //Filter the list using the keywords inserted in searchbar
        onClear={text => this.search('')}
        placeholder="Type Here..."
        value={this.state.search}

      />
    )
  }
}

export default HomeScreen
