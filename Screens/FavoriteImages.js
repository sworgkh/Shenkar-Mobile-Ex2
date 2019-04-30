import React from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import { LoadFromStorage, OneImage, CleanFavoriteImages, addFavorites } from '../actions'
import Header from '../components/Header'
const styles = require('../components/SearchResults/SearchResultsStyles')
import { PropTypes } from 'prop-types'

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

  constructor(props) {
    super(props)
    this.state = {
      item: null,
      favorites_loaded: []
    }

    this.render_item = this.render_item.bind(this)
    this._keyExtractor = this._keyExtractor.bind(this)
    this.cleanFavorites = this.cleanFavorites.bind(this)
  }

  cleanFavorites() {
    Alert.alert(
      `Do you want to vote clean your favorites ?`,
      '',
      [
        {
          text: 'Yes',
          onPress: () => {
            AsyncStorage.getAllKeys().then(keys =>
              AsyncStorage.multiGet(keys).then(result => {
                result.map(req =>
                  req.forEach(element => {
                    try {
                      AsyncStorage.removeItem(element)
                    } catch (error) {
                      console.log(error.message)
                    }
                  })
                )
              })
            )

            this.props.CleanFavoriteImages()
          }
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ],
      { cancelable: false }
    )
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
            uri: `${item.previewURL}`
          }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        <Header
          navigation={this.props.navigation}
          onPress={() => {
            this.cleanFavorites()
          }}
          iconName={'trash'}
        />
        <ScrollView style={styles.searchResultsContainer}>
          <FlatList
            numColumns={3}
            style={{ width: Dimensions.get('window').width - 5 }}
            data={this.props.favorites}
            keyExtractor={this._keyExtractor}
            renderItem={this.render_item}
          />
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    // results: state.results,
    item: state.item,
    favorites: state.favorites
  }
}

FavoriteImages.propTypes = {
  navigation: PropTypes.object,
  OneImage: PropTypes.func,
  CleanFavoriteImages: PropTypes.func,
  favorites: PropTypes.object
}
export default connect(
  mapStateToProps,
  { OneImage, CleanFavoriteImages, LoadFromStorage, addFavorites }
)(FavoriteImages)
