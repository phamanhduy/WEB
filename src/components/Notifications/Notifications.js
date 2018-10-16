import React from 'react'
import Notification from 'react-web-notification'
import { get } from 'lodash'
import { browserHistory } from 'react-router'

import { baseUrl } from '../../config/config'

export default class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ignore: false,
      title: ''
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handlePermissionGranted() {
    // console.log('Notifications Permission Granted')
    this.setState({
      ignore: false
    })
  }

  handlePermissionDenied() {
    // console.log('Notifications Permission Denied')
    this.setState({
      ignore: true
    })
  }

  handleNotSupported() {
    console.log('Web Notification not Supported')
    this.setState({
      ignore: true
    })
  }

  handleNotificationOnClick(e, tag) {
    console.log(`Notification clicked tag: ${tag}`, e)
    browserHistory.push(get(e, ['currentTarget', 'data'], '/'))
  }

  handleNotificationOnError(e, tag) {
    console.log(e, `Notification error tag:${tag}`)
  }

  handleNotificationOnClose(e, tag) {
    console.log(e, `Notification closed tag:${tag}`)
  }

  handleNotificationOnShow(e, tag) {
    this.playSound()
    console.log(e, `Notification shown tag:${tag}`)
  }

  playSound() {
    document.getElementById('sound').play()
  }

  handleButtonClick() {
    if (this.state.ignore) {
      return
    }
    const now = Date.now()
    const title = 'React-Web-Notification'
    const body = 'Hello'
    const tag = now
    const icon = `${baseUrl}/img/logo.png`
    // const icon = 'http://localhost:3000/Notifications_button_24.png'

    // Available options
    // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
    const options = {
      tag,
      body,
      icon,
      lang: 'en',
      dir: 'ltr',
      sound: `${baseUrl}/media/sounds/sound.mp3`  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
    }
    this.setState({
      title,
      options
    })
  }

  render() {
    return (
      <div>
        <Notification
          ignore={this.props.ignore && this.props.title !== ''}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.props.title}
          options={this.props.options}
        />
        <audio id="sound" preload="auto">
          <source src={`${baseUrl}/media/sounds/sound.mp3`} type="audio/mpeg"/>
          <source src={`${baseUrl}/media/sounds/sound.ogg`} type="audio/ogg"/>
          <embed hidden="true" loop="false"
                 src={`${baseUrl}/media/sounds/sound.mp3`}/>
        </audio>
      </div>
    )
  }
}
