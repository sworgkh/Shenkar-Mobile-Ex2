import { combineReducers } from 'redux'
import { SEARCH_RESULTS, ONE_IMAGE, FAVORITE_IMAGES } from '../actions'

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
    case FAVORITE_IMAGES:
      return [...state, action.favorites]

    default:
      return state
  }
}

const rootReducer = combineReducers({
  results,
  item,
  favorites
})

export default rootReducer
