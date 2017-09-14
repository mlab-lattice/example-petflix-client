import React from "react"
import { Link } from 'react-router-dom'

export default class Poster extends React.Component {
  render() {
    const { video, isOriginal } = this.props
    let style = {
      background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${video.image}) no-repeat center`,
      backgroundSize: 'cover'
    }
    
    if (isOriginal) {
      style['--aspect-ratio'] = '1/2'
    } else {
      style['--aspect-ratio'] = '16/9'
    }
    
    let overlayStyle = {
      background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5)), url(${video.hoverImage}) no-repeat center`,
      backgroundSize: 'cover'
    }
    
    return (
      
      <div className={'col-6 col-lg-2 ' + (isOriginal ? 'poster-original' : 'poster')} style={style}>
      <Link to={`/view/${video._id}`}>
        <div className="overlay d-flex justify-content-center" style={overlayStyle}>
          
          <div className="playring align-self-center d-flex mx-auto">
            <i className="icon-play m-auto"></i>
          </div>
          <div className="align-self-end">
            <h3>{video.title}</h3>
            <p className="description">2017 <span className="box">TV-MA</span> 1 Season</p>
            <p className="description">{video.description}</p>
          </div>
          
        </div>
        { isOriginal &&
          <div className="text-vid-info">
            <p className="text-center"><strong>PETFLIX</strong> <span className="light">ORIGINAL</span></p>
            <h1 className="text-center">{video.title}</h1>
          </div>
        }
        </Link>
      </div>
      
    )
  }
}
