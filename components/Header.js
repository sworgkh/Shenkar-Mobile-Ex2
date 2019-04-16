import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    margin: 5
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width - 4,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: '#66ffcc',
    height: 50,
    borderRadius: 5
  },
  textSearchButton: {
    // flex: 1,
    margin: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 40,
    width: 40
  }
})
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Images Browser</Text>
        <TouchableOpacity
          style={styles.textSearchButton}
          onPress={() => this.props.navigation.navigate('FavoriteImages')}
        >
          <FontAwesome name="heart" size={16} color="#000" />
        </TouchableOpacity>
      </View>
    )
  }
}
