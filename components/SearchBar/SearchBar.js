import React, { Component } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import API_KEY from '../../API/pixabay'
import { connect } from 'react-redux'
import { searchResults } from '../../actions'

const styles = require('./SearchBarStyles')

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  searchOnMedium = () => {
    const URL =
      'https://pixabay.com/api/?key=' + API_KEY.pixabay_key + '&q=' + this.state.searchTerm
    console.log(URL)
    fetch(URL)
      .then(response => response.json())
      .then(responseJson => {
        this.props.searchResults(responseJson.hits)
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Enter your search terms"
          style={styles.textInputSearch}
          underlineColorAndroid={'transparent'}
          onChangeText={searchTerm => this.setState({ searchTerm })}
          value={this.state.searchTerm}
        />
        <TouchableOpacity style={styles.textSearchButton} onPress={() => this.searchOnMedium()}>
          <FontAwesome name="search" size={16} color="#000" />
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  null,
  { searchResults }
)(SearchBar)
