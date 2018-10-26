import React, { Component } from 'react'
import { ME } from '../../../../helpers/constants.js'
// import { MediaStream } from '../../../../helpers/window.js'a

export default class Video extends Component {
  handleClick = e => {
    const { onClick, userId } = this.props
    this.play(e)
    onClick(userId)
  }
  play = e => {
    e.preventDefault()
    e.target.play()
  }
  componentDidMount () {
    this.componentDidUpdate()
  }
  componentDidUpdate () {
    const { stream } = this.props
    const { video } = this.refs
    const url = stream && stream.url
    if ('srcObject' in video) {
      if (video.srcObject !== stream) {
        // Video.js:25 Uncaught (in promise) TypeError: Failed to set the 'srcObject' property on 'HTMLMediaElement': The provided value is not of type 'MediaStream'.
        video.srcObject = stream
      }
    } else {
      if (video.src !== url) {
        video.src = url
      }
    }
  }
  
  render () {
    const { userId } = this.props
    return (
      <div>
        <video
          autoPlay
          muted={userId === ME}
          // onClick={this.handleClick}
          onLoadedMetadata={this.play}
          playsInline
          ref="video"
        />
      </div>
    )
  }
}
