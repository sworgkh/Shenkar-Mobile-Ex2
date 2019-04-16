import React from 'react'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { Dimensions, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { FavoriteImages } from '../actions'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heart: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class OneImage extends React.Component {
  static navigationOptions = {
    title: 'Image',
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
      icon_style: 'heart-o',
      is_favorite: false
    }
    this.eliminateHeart = this.eliminateHeart.bind(this)
  }

  componentDidMount() {
    this.setState({
      item: this.props.item
    })

    this.setState({
      icon_style: 'heart-o'
    })
    if (this.props.favorites.includes(this.props.item)) {
      this.setState({
        is_favorite: true,
        icon_style: 'heart-o'
      })
    }
  }

  eliminateHeart(){
    this.setState({
      is_favorite: true
    })
  }

  changeFavoritesState(item) {
    this.setState({
      icon_style: 'heart'
    })
    setTimeout(this.eliminateHeart, 500)
    this.props.FavoriteImages(item)
  }
  render() {
    if (this.state.is_favorite) {
      return (
        <View style={styles.container}>
          <Header navigation={this.props.navigation} />
          <Image
            style={{
              margin: 2,
              width: Dimensions.get('window').width - 10,
              height: Dimensions.get('window').width - 10
            }}
            source={{
              uri: `${this.props.item.largeImageURL}`
            }}
          />
          <TouchableOpacity
            style={styles.heart}
            onPress={() => {
              this.changeFavoritesState(this.props.item)
            }}
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Image
          style={{
            margin: 2,
            width: Dimensions.get('window').width - 10,
            height: Dimensions.get('window').width - 10
          }}
          source={{
            uri: `${this.props.item.largeImageURL}`
          }}
        />
        <TouchableOpacity
          style={styles.heart}
          onPress={() => {
            this.changeFavoritesState(this.props.item)
            console.log(this.props.store)
          }}
        >
          <FontAwesome name={this.state.icon_style} size={100} color="#000" />
        </TouchableOpacity>
      </View>
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
  { FavoriteImages }
)(OneImage)
// export default OneImage
