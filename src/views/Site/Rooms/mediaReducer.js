import * as constant from '../../../helpers/constants'

const initialState = {
    stream: null,
    userId: null
}


const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.STREAM_ADD:
        return {
          stream: action.payload.stream,
          userId: action.payload.userId
        }
    default:
        return {
          ...state
        }
  }
}
export default mediaReducer
