import React from "react"

export default class Poster extends React.Component {
  render() {
    const { original } = this.props
    let style = {
      background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${original.image}) no-repeat center`,
      backgroundSize: 'cover'
    }
    return (
      <div className="col poster" style={style}>
        <div className="text-info">
          <p className="text-center list-title"><strong>PETFLIX</strong> <span className="light">ORIGINAL</span></p>
          <h1 className="text-center list-title">{original.title}</h1>
        </div>
      </div>
    )
  }
}
