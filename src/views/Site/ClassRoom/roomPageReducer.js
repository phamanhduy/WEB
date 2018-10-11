
import * as roomPageActions from './roomPageActions'

const initialState = {
  media: {
      video: false,
      audio: false
    }
}

const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
        case roomPageActions.VIDEO_STREAM:
          return action.payload.video
        case roomPageActions.AUDIO_STREAM:
          return action.payload.audio
        case roomPageActions.ERROR_STREAM:
          return false
        default:
          return false
      }
}
export default mediaReducer
