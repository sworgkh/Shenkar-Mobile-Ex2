import React, { Component } from 'react'
import { ScrollView, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import { connect, Provider } from 'react-redux'
import { OneImage } from '../../actions'
const styles = require('./SearchResultsStyles')

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.setState({ item: null })

    this.render_item = this.render_item.bind(this)
    this._keyExtractor = this._keyExtractor.bind(this)
  }

  _keyExtractor = item => item.id

  render_item = ({ item }) => {
    // console.log(this.props)
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.OneImage(item)
          this.props.navigation.navigate('OneImage')
        }}
      >
        <Image
          style={{
            margin: 2,
            width: Dimensions.get('window').width / 3 - 5,
            height: Dimensions.get('window').width / 3 - 5
          }}
          source={{
            uri: `${item.largeImageURL}`
          }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView style={styles.searchResultsContainer}>
        <FlatList
          numColumns={3}
          style={{ width: Dimensions.get('window').width - 5 }}
          data={this.props.results}
          keyExtractor={this._keyExtractor}
          renderItem={this.render_item}
        />
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results,
    item: state.item,
    favorites: state.favorites
  }
}

export default connect(
  mapStateToProps,
  { OneImage }
)(SearchResults)
