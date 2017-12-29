import React from "react"
import Poster from "./Poster"

export default class VidList extends React.Component {
  render() {
    const { list, listName } = this.props

    let isOriginal = listName === 'Petflix Originals' ? true : false

    let posters = list.map(video => <Poster key={video.id} video={video} isOriginal={isOriginal} /> )

    return (
      <div className="row-and-title">
        <h4 className="list-title text-uppercase">{listName}</h4>
        <div className={'row video-row ' + (isOriginal ? 'original' : '')}>
          {posters}
        </div>
      </div>
    )
  }
}

