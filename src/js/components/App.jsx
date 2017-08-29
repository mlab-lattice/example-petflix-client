import React from "react"
import Header from './Header'
import OriginalList from './OriginalList'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid content">
          <OriginalList />
        </div>
      </div>
    )
  }
}
