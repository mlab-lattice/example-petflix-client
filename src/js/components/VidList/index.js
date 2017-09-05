import React from "react"
import Poster from "./Poster"

export default class VidList extends React.Component {
  render() {
    const { list } = this.props
    
    let isOriginal = list.name === 'Petflix Originals' ? true : false
    
    let posters = list.list.map(video => <Poster key={video.id} video={video} isOriginal={isOriginal} /> )

    return (
      <div className="row-and-title">
        <h4 className="list-title text-uppercase">{list.name}</h4>
        <div className={'row video-row ' + (isOriginal ? 'original' : '')}>
          {posters}
        </div>
      </div>
    )
  }
}

