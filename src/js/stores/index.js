import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

let poster = {
  title: "Title",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend vitae risus vitae varius.",
  year: "2017",
  rating: "TV-MA"
}

let mainVid = {
  subTitle: "Lorem ipsum dolor sit amet",
  image: 'https://unsplash.it/2000/1000?image=50',
  ...poster
}

let originals = []

for (let i = 0; i < 6; i++) {
  poster.id = i
  poster.image = `https://unsplash.it/295/590?image=${10 + i}`
  poster.hoverImage = `https://unsplash.it/295/590?image=${20 + i}`
  originals.push({...poster})
}



const defaultState = {
  lists: [
    {
      name: "Petflix Originals",
      list: originals
    },
    {
      name: "Dogs",
      list: originals
    },
    {
      name: "Cats",
      list: originals
    },
    {
      name: "Others",
      list: originals
    }
  ],
  mainVid
}

const middleware = applyMiddleware(createLogger(), thunk)
const store = createStore(reducers, defaultState, middleware)

window.store = store // expose store globally to manipulate in browser

export default store
