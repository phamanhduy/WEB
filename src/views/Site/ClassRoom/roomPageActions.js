// import { store } from '../../../store'
import { socket } from '../../../index'
import { get } from 'lodash'
import { ME, INIT } from '../../../helpers/constants.js'
import { getUserMedia, play } from '../../../helpers/window.js'


// export const getStreamData = (state) => {
//   socketClient.emit('send-data-client', {
//     name: 'pham anh duy',
//     age: 25,
//     sex: 'age'
//   })
// }

export const init = dispatch => {
  return dispatch({
    type: INIT,
    payload: Promise.all([
      getCameraStream()(dispatch)
    ])
  })
}

// export const connect = () => dispatch => {
//   return new Promise(resolve => {
//     socket.once('connect', () => {
//       resolve(socket)
//     })
//     socket.on('connect', () => {
//       dispatch(NotifyActions.warning('Connected to server socket'))
//     })
//     socket.on('disconnect', () => {
//       dispatch(NotifyActions.error('Server socket disconnected'))
//     })
//   })
// }

export const getCameraStream = () => dispatch => {
  return getUserMedia({ video: true, audio: true })
    .then(stream => {
      const video = document.getElementById('stream1')
      video.srcObject = stream
      // play()
      // dispatch(StreamActions.addStream({ stream, userId: ME }))
      // return stream
    })
    .catch(() => {
      // dispatch(NotifyActions.alert('Could not get access to microphone & camera'))
      return null
    })
}

// import { get } from 'lodash'

// ========================== LOGIN ACTION ========================================================
// export const VIDEO_STREAM = 'VIDEO_STREAM'
// export const AUDIO_STREAM = 'AUDIO_STREAM'
// export const ERROR_STREAM = 'ERROR_STREAM'

// export const streamVideo = createAction(VIDEO_STREAM,
//   (stream) => ({
//     video: stream
//   })
// )

// export const streamAudio = createAction(AUDIO_STREAM,
//   (stream) => ({
//     audio: stream
//   })
// )
// export const errorStream = createAction(ERROR_STREAM,
//   () => ({
//     err: true
//   })
// )


// export const getPasswordFocus = state => get(state, ['auth', 'user', 'passwordFocus'], false)
// export const getUser = state => get(state, ['auth', 'user'], {})
// export const getUserData = state => get(state, ['auth', 'user', 'data'], {})
// export const getUserId = state => get(state, ['auth', 'user', 'data', 'id'], 0)
// export const getUserToken = state => get(state, ['auth', 'user', 'data', 'token'], '')
// export const getRedirectTo = state => get(state, ['auth', 'redirectTo'], '')
// export const getVideo = state => get(state, ['media', 'video'], '')

