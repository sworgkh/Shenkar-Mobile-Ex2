import { combineReducers } from 'redux'
import {
  SEARCH_RESULTS,
  ONE_IMAGE,
  FAVORITE_IMAGES,
  CLEAN_FAVORITE_IMAGES,
  LOADING,
  ADD_FAVORITES,
  LOAD_FROM_STORAGE
} from '../actions'
import { AsyncStorage } from 'react-native'

function results(state = [], action) {
  switch (action.type) {
    case SEARCH_RESULTS:
      return action.results

    default:
      return state
  }
}

function item(state = null, action) {
  switch (action.type) {
    case ONE_IMAGE:
      return action.item

    default:
      return state
  }
}
function favorites(state = [], action) {
  switch (action.type) {
    case FAVORITE_IMAGES: {
      try {
        AsyncStorage.setItem(action.favorites.id.toString(), JSON.stringify(action.favorites))
      } catch (error) {
        console.log(error)
      }
      return [...state, action.favorites]
    }
    case LOAD_FROM_STORAGE: {
      return state
    }

    case ADD_FAVORITES: {
      return [...state, action.favorites]
    }
    case CLEAN_FAVORITE_IMAGES: {
      return []
    }

    default:
      return state
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case LOADING:
      return action.loading

    default:
      return state
  }
}

const rootReducer = combineReducers({
  results,
  item,
  favorites,
  loading
})

export default rootReducer
