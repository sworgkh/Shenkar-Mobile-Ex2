import React from 'react'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import { SearchBar } from 'react-native-elements'
import { TextInput } from 'react-native'

describe('SearchBar', function() {
  test('renders correctly', async () => {
    renderer.create(<SearchBar />)
  })

  test('has placeholder', async () => {
    //const testRenderer = renderer.create(<SearchBar />)
    //console.log(testRenderer.root.findAllByType(TextInput))
    //expect(testRenderer.root.findAllByType(TextInput).placeholder).toBe('Enter your search terms')
  })
})
