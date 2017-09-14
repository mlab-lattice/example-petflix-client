import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.jsx"
import ViewVid from "./components/Video"
import store from './stores'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <div className="h-100">
      <Route exact path="/" component={App} />
      <Route path="/view/:id" render={( {match} ) => (<ViewVid vidid={match.params.id}/>)} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
