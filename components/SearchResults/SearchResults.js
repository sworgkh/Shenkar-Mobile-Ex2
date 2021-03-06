import React, { Component } from 'react'
import {
  ScrollView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { OneImage, RenderLoading, addFavorites } from '../../actions'
import { PropTypes } from 'prop-types'
const styles = require('./SearchResultsStyles')

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rendering: true
    }
    this.render_item = this.render_item.bind(this)
    this._keyExtractor = this._keyExtractor.bind(this)
  }

  _keyExtractor = item => item.id

  render_item({ item }) {
    const imageStyle = {
      margin: 2,
      width: Dimensions.get('window').width / 3 - 5,
      height: Dimensions.get('window').width / 3 - 5
    }

    return (
      <TouchableOpacity
        onPress={() => {
          this.props.OneImage(item)
          this.props.navigation.navigate('OneImage')
        }}
      >
        <Image
          style={imageStyle}
          source={{
            uri: `${item.largeImageURL}`
          }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    if (this.props.loading) {
      return (
        <ScrollView style={styles.searchResultsContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </ScrollView>
      )
    }
    if (!this.props.gridOrList) {
      if (!this.props.results.length) {
        return (
          <ScrollView style={styles.searchResultsContainer}>
            <Text style={styles.notFoundMessage}>No items found</Text>
          </ScrollView>
        )
      }
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

    if (!this.props.results.length) {
      return (
        <ScrollView style={styles.searchResultsContainer}>
          <Text style={styles.notFoundMessage}>No items found</Text>
        </ScrollView>
      )
    }
    const imageStyle = {
      margin: 10,
      width: Dimensions.get('window').width / 5 - 5,
      height: Dimensions.get('window').width / 5 - 5
    }
    return (
      <ScrollView style={styles.searchResultsContainer}>
        {this.props.results.map(item => {
          return (
            <View key={item.id} style={styles.pictureWithInfo}>
              <View style={styles.pictureInfoInner}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.OneImage(item)
                    this.props.navigation.navigate('OneImage')
                  }}
                >
                  <Image
                    style={imageStyle}
                    source={{
                      uri: `${item.previewURL}`
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.userInfo}>User who uploaded: {item.user}</Text>
              </View>
              <View style={styles.footer}>
                <Text style={styles.views}>Views: {item.views}</Text>
                <Text style={styles.likes}>Likes: {item.likes}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results,
    item: state.item,
    loading: state.loading,
    favorites: state.favorites
  }
}

SearchResults.propTypes = {
  navigation: PropTypes.object,
  OneImage: PropTypes.func,
  loading: PropTypes.object,
  results: PropTypes.object,
  gridOrList: PropTypes.object
}
export default connect(
  mapStateToProps,
  { OneImage, RenderLoading, addFavorites }
)(SearchResults)
