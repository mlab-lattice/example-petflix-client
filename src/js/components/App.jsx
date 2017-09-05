import React from "react"
import { connect } from 'react-redux'
import Header from './Header'
import VidList from './VidList'


export class AppView extends React.Component {  
  render() {
    let { lists, mainVid } = this.props
    
    let vidLists = lists.map(list => <VidList key={list.name} list={list} /> )
    
    let heroStyle = {
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(20,20,20,1)), url(${mainVid.image}) no-repeat center center`,
      backgroundSize: 'cover'
    }
    
    return (
      <div className="h-100">
        <Header />
        <div className="container-fluid hero-video h-75" style={heroStyle}>
          <div className="row h-100 align-items-center">
            <div className="col-4">
              <h1 className="display-1">{mainVid.title}</h1>
              <h2>{mainVid.subTitle}</h2>
              <p className="lead">{mainVid.description}</p>
              <a className="flat-button flat-button-primary" href="#"><i className="icon-play"></i> Play</a>
              <a className="flat-button" href="#"><i className="icon-play"></i> Trailer</a>
            </div>
          </div>
        </div>
        <div className="container-fluid content">
          {vidLists}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const App = connect(
  mapStateToProps
)(AppView)

export default App
