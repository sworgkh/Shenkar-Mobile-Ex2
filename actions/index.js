export const SEARCH_RESULTS = 'SEARCH_RESULTS'

export function searchResults(results) {
  return {
    type: SEARCH_RESULTS,
    results
  }
}

export const ONE_IMAGE = 'ONE_IMAGE'

export function OneImage(item) {
  return {
    type: ONE_IMAGE,
    item
  }
}

export const FAVORITE_IMAGES = 'FAVORITE_IMAGES'

export function FavoriteImages(favorites) {
  return {
    type: FAVORITE_IMAGES,
    favorites
  }
}

export const CLEAN_FAVORITE_IMAGES = 'CLEAN_FAVORITE_IMAGES'

export function CleanFavoriteImages(favorites) {
  return {
    type: CLEAN_FAVORITE_IMAGES,
    favorites
  }
}

export const LOADING = 'LOADING'

export function RenderLoading(loading) {
  return {
    type: LOADING,
    loading
  }
}