import * as types from '../constants/ActionTypes'

const reducer = (state, action) => {
  switch (action.type) {
    case types.FETCH_VIDEOS_FULFILLED:
      let mainVid = {}
      let cats = []
      let dogs = []
      let originals = []
      action.payload.forEach((vid) => {
        switch (vid.category) {
          case 'mainVid':
            mainVid = vid
            break
          case 'originals':
            originals.push(vid)
            break
          case 'cats':
            cats.push(vid)
            break
          case 'dogs':
            dogs.push(vid)
            break
        }
      })
      let allVids = action.payload
      let lists = {
        "Petflix Originals": originals,
        "Dogs": dogs,
        "Cats": cats
      }
      return {...state, mainVid, lists, allVids }
      
    default:
      return state
  }
}

export default reducer
