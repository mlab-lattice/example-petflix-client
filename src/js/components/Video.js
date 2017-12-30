import React from "react"
import { connect } from 'react-redux'
import Header from './Header'
import VidList from './VidList'
import { Switch, Route, Link } from 'react-router-dom'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    EmailShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const RedditIcon = generateShareIcon('reddit')
const EmailIcon = generateShareIcon('email')

class ViewVideo extends React.Component {
  render() {

    let { vidid, allVids } = this.props

    let video = allVids.find((vid) => { return vid._id === vidid })
    video = video || {
      title: 'Video Not Found',
      video: "#"
    }

    let titleStyle = {
      textAlign: 'center'
    }

    let buttonStyle = {
      display: 'inline'
    }

    return (
      <div className="h-100">
        <Header />
        <div className="container h-100" style={{marginTop: "120px"}}>

          <div className="row h-100 align-items-center justify-content-center">
            <div className="h-100">
              <div className="col-12">
                <h2 className="list-title" style={titleStyle} >{video.title}</h2>
              </div>
              <div className="col-12">
                <video src={video.video} poster={video.videoImg} preload="auto" autoPlay muted loop webkitPlaysinline="" className="mh-100 gifvideo">
                </video>
              </div>
              <div className="col-12" style={titleStyle} >

                <FacebookShareButton url={window.location.href} style={buttonStyle} >
                  <FacebookIcon style={buttonStyle} />
                </FacebookShareButton>

                <TwitterShareButton url={window.location.href} style={buttonStyle} >
                  <TwitterIcon style={buttonStyle} />
                </TwitterShareButton>

                <RedditShareButton url={window.location.href} style={buttonStyle} >
                  <RedditIcon style={buttonStyle} />
                </RedditShareButton>

                <EmailShareButton url={window.location.href} style={buttonStyle} >
                  <EmailIcon style={buttonStyle} />
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allVids: state.allVids
  }
}

const ViewVid = connect(
  mapStateToProps
)(ViewVideo)

export default ViewVid
