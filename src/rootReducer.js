import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { reducers as apiReducers } from 'redux-api-call'
import { REHYDRATE } from 'redux-persist/constants'

import { env } from './config/config'
import { USER_LOGOUT } from './views/Site/Login/state'
// Page Reducer
import asideReducer from './views/Cms/_Parts/Aside/_asideReducer'
import loginReducer from './views/Site/Login/_loginReducer'
import mediaReducer from './views/Site/Rooms/mediaReducer'
import peersReducer from './views/Site/Rooms/peersReducer'
import fullReducer from './layouts/Full/_fullReducer'
import * as fullActions from './layouts/Full/_fullActions'

const appReducer = combineReducers({
  auth: loginReducer,
  aside: asideReducer,
  toastr: toastrReducer, // <- Mounted at toastr.
  ...apiReducers,
  form: formReducer,
  routing: routerReducer,
  app: fullReducer,
  media: mediaReducer,
  peers: peersReducer
})


const rootReducer = (state, action) => {
  // Log actions for debugging
  if (
    (env === 'development' || env === 'local')
  // && action.type.indexOf('redux-form') <= 0
  // && action.type.indexOf('ReduxToastr') <= 0
  // && action.type.indexOf('INIT') <= 0
  // && action.type.indexOf('router') <= 0
  // && action.type.indexOf('REHYDRATE') <= 0
  // && action.type.indexOf('CONNECTED') <= 0
  // && action.type.indexOf('START') <= 0
  ) {
    console.log(`${action.type} `, action)
  }
  switch (action.type) {
    case USER_LOGOUT:
      return {
        routing: state.routing,
        app: state.app,
        auth: {
          user: {
            isFetching: false
          }
        }
      }
    case REHYDRATE:
      return {
        ...state,
        ...action.payload,
        app: {
          ...fullActions.initialState,
          ...action.payload.app,
          rehydrated: true,
        }
      }
    default:
      return appReducer(state, action)
  }
}

export default rootReducer
