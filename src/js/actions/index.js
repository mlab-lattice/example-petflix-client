import Api from '../services'
import * as types from '../constants/ActionTypes'

export const dispatchFetchVideos = (dispatch) => {
  dispatch({ type: types.FETCH_VIDEOS_PENDING })
  return Api.fetchVideos().then(
    res => {
      dispatch({ type: types.FETCH_VIDEOS_FULFILLED, payload: res.data })
    },
    err => {
      dispatch({ type: types.FETCH_VIDEOS_FAILED, err })
    }
  )
}