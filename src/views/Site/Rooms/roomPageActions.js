// import { store } from '../../../store'
import { socket } from '../../../index'
// import { get } from 'lodash'
import { INIT, ME } from '../../../helpers/constants'
import { getUserMedia } from '../../../helpers/window'
import * as actionStream from './StreamActions'
import * as NotifyActions from './NotifyActions'
import * as socketAction from './SocketActions'


// export const getStreamData = (state) => {
//   socketClient.emit('send-data-client', {
//     name: 'pham anh duy',
//     age: 25,
//     sex: 'age'
//   })
// }

export const getCameraStream = () => dispatch => getUserMedia({ video: true, audio: true })
    .then((stream) => {
      dispatch(actionStream.addStream({ stream, userId: ME }))
      return stream
    })
  .catch(() => {
    dispatch(NotifyActions.alert('Could not get access to microphone & camera'))
})

export const init = dispatch => dispatch({
  type: INIT,
  payload: Promise.all([
    getCameraStream()(dispatch)
    .then((stream) => {
      dispatch(socketAction.handshake({
        socket,
        roomName: 'ma_phong',
        stream
      }))
    })
  ])
})
