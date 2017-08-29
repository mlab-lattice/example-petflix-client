import React from "react"
import Poster from "./Poster"
import { connect } from 'react-redux'

class OriginalListView extends React.Component {
  render() {
    const { originals } = this.props

    let posters = originals.map(original => <Poster key={original.id} original={original} /> )

    return (
      <div className="container-fluid">
        <h4 className="list-title">PETFLIX ORIGINALS</h4>
        <div className="row original-row">
          {posters}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    originals: state.originals
  }
}

const OriginalList = connect(
  mapStateToProps
)(OriginalListView)

export default OriginalList
