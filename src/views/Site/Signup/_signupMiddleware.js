import { toastr } from 'react-redux-toastr'
import { browserHistory } from 'react-router'
// import { REHYDRATE } from 'redux-persist/constants'
import { get } from 'lodash'
import { authentication as authAPI } from '../../../helpers/api.call'
// import { socketClient } from '../../../index'
import * as actions from './_signupActions'
// import { baseUrl } from '../../../config/config'

const signupMiddleware = store => next => (action) => { 
  next(action)
  // const currentState = store.getState()
  // const token = get(currentState, ['auth', 'user', 'data', 'token'], '')
  // const userId = get(currentState, ['auth', 'user', 'data', 'id'], false)
  // const isLogin = get(currentState, ['auth', 'user', 'isLogin'], false)
  // const redirectLoginUrl = `${baseUrl}/auth/login`
  switch (action.type) {
    /* Case */
    case actions.SUBMIT_SIGNUP:
      authAPI.submitRegister(
        get(action, ['payload', 'user', 'data', 'username'], ''),
        get(action, ['payload', 'user', 'data', 'email'], ''),
        get(action, ['payload', 'user', 'data', 'password'], '')
      ).then((res) => {
        if (res.success === true) {
          store.dispatch(
            actions.submitSignupSuccess())
        } else {
          store.dispatch(actions.submitSignupFailure(res.payload))
        }
      })
        .catch(err => actions.submitSignupFailure(err))
      break
    case actions.SUBMIT_SIGNUP_SUCCESS:
      browserHistory.push('/auth/login')
      break
    case actions.SUBMIT_SIGNUP_FAILURE:
      toastr.error('Không thành công', 'Vui lòng kiểm tra lại thông tin')
      break
    default:
      break
  }
}
export default signupMiddleware
