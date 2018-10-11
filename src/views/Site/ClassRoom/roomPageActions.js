// import { store } from '../../../store'
// import { socketClient } from '../../../index'
import { get } from 'lodash';


// export const getStreamData = (state) => {
//   socketClient.emit('send-data-client', {
//     name: 'pham anh duy',
//     age: 25,
//     sex: 'age'
//   })
// }

import { createAction } from 'redux-actions'
// import { get } from 'lodash'

// ========================== LOGIN ACTION ========================================================
export const VIDEO_STREAM = 'VIDEO_STREAM'
export const AUDIO_STREAM = 'AUDIO_STREAM'
export const ERROR_STREAM = 'ERROR_STREAM'

export const streamVideo = createAction(VIDEO_STREAM,
  (stream) => ({
    video: stream
  })
)

export const streamAudio = createAction(AUDIO_STREAM,
  (stream) => ({
    audio: stream
  })
)
export const errorStream = createAction(ERROR_STREAM,
  () => ({
    err: true
  })
)


// export const getPasswordFocus = state => get(state, ['auth', 'user', 'passwordFocus'], false)
// export const getUser = state => get(state, ['auth', 'user'], {})
// export const getUserData = state => get(state, ['auth', 'user', 'data'], {})
// export const getUserId = state => get(state, ['auth', 'user', 'data', 'id'], 0)
// export const getUserToken = state => get(state, ['auth', 'user', 'data', 'token'], '')
// export const getRedirectTo = state => get(state, ['auth', 'redirectTo'], '')
export const getVideo = state => get(state, ['media', 'video'], '')

