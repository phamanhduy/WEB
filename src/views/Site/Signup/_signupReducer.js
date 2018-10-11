import { persistor } from '../../../index'
import * as signupActions from './_signupActions'

const SignupReducer =
  (state = {
    redirectTo: '',
    user: {
      isLogin: false
    }
  }, action) => {
    switch (action.type) {
      case signupActions.SUBMIT_SIGNUP:
        return {
          ...state,
          ...action.payload
        }
      case signupActions.SUBMIT_SIGNUP_SUCCESS:
        persistor.resume()
        return {
          ...state,
          ...action.payload
        }
      case signupActions.SUBMIT_SIGNUP_FAILURE:
        return {
          ...state,
          ...action.payload
        }
      default:
        return state
    }
  }
export default SignupReducer
