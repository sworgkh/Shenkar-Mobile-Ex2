import React, { Component } from 'react'
import { AsyncStorage, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import API_KEY from '../../API/pixabay'
import { connect } from 'react-redux'
import { searchResults, RenderLoading, addFavorites } from '../../actions'

const styles = require('./SearchBarStyles')

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.removeLoading = this.removeLoading.bind(this)
  }

  componentDidMount(): void {
    console.log('load from storage')
    AsyncStorage.getAllKeys().then(keys =>
      AsyncStorage.multiGet(keys).then(result => {
        result.map(req =>
          req.forEach(element => {
            const candidate = JSON.parse(element)
            console.log(candidate)
            if (candidate.id) {
              if (!this.props.favorites) {
                this.props.addFavorites(candidate)
                return
              }
              let load = true
              for (let i = 0; i < this.props.favorites.length; i++) {
                if (this.props.favorites[i].id === candidate.id) {
                  load = false
                }
              }
              if (load) {
                this.props.addFavorites(candidate)
              }
            }
          })
        )
      })
    )
  }

  searchOnMedium = () => {
    console.log('first')
    this.props.RenderLoading(true)
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
    setTimeout(this.removeLoading, 500)
  }

  removeLoading() {
    this.props.RenderLoading(false)
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
  { searchResults, RenderLoading, addFavorites }
)(SearchBar)
