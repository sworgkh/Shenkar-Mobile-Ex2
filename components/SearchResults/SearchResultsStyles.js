const React = require('react-native')
const { Dimensions, StyleSheet } = React

module.exports = StyleSheet.create({
  searchResultsContainer: {
    width: Dimensions.get('window').width - 20
  },
  data: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  pictureWithInfo: {
    margin: 10,
    backgroundColor: 'lightblue'
  },
  pictureInfoInner: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  footer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: 10
  },
  notFoundMessage: { margin: '5%', fontSize: 19 },
  userinfo: { width: '50%', margin: '1%', fontSize: 19 },
  views: { marginLeft: 10 },
  likes: { marginRight: '10%' }
})
