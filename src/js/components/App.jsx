import React from "react"
import { connect } from 'react-redux'
import Header from './Header'
import VidList from './VidList'
import { Switch, Route, Link } from 'react-router-dom'

class ViewVideo extends React.Component { 
  render() {
    let { match } = this.props
    return (
      <div className="h-100">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
          
            <h2>View Video {match.params.id}</h2>
          </div>
        </div>
      </div>
    )
  } 
}

// const ViewVideo = ({ match }) => (
//   <div className="h-100">
//     <div className="container h-100">
//       <div className="row h-100 align-items-center">
//       
//         <h2>View Video {match.params.id}</h2>
//       </div>
//     </div>
//   </div>
// )

class RouterAppView extends React.Component {  
  render() {  
    return (
      <div className="h-100">
        <Header />
        <Route exact path="/" component={App}/>
        <Route path="/view/:id" render={({match}) => (<ViewVideo match={match}/>)}/>
      </div>
    )
  }
}

class AppView extends React.Component {  
  render() {
    let { lists, mainVid } = this.props
    
    let vidLists = Object.entries(lists).map(list => <VidList key={list[0]} listName={list[0]} list={list[1]} /> )
    
    let heroStyle = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(20,20,20,1)), url(${mainVid.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
    
    return (
      <div className="h-100">
        <Header />
        <div className="container-fluid hero-video h-75" style={heroStyle}>
          <div className="row h-100 align-items-center">
            <div className="col-6">
              <h1 className="display-1">{mainVid.title}</h1>
              <h2>{mainVid.subTitle}</h2>
              <p className="lead">{mainVid.description}</p>
              <Link to={`/view/${mainVid._id}`} className="flat-button flat-button-primary" href="#"><i className="icon-play"></i> Play</Link>
              <Link to="/test" className="flat-button" href="#"><i className="icon-play"></i> Trailer</Link>
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
