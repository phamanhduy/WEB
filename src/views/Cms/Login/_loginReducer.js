import { persistor } from '../../../index';
import * as loginActions from './_loginActions';

const loginReducer =
  (state = {
    redirectTo: '',
    user: {
      isLogin: false
    }
  }, action) => {
    switch (action.type) {
      case loginActions.MUST_LOGIN:
        return {
          redirectTo: action.payload.redirectTo === '/auth/login' ? '/' : action.payload.redirectTo,
          user: {
            isFetching: action.payload.user.isFetching,
            isLogin: action.payload.user.isLogin
          }
        };
      case loginActions.SUBMIT_LOGIN:
        return {
          ...state,
          ...action.payload
        };
      case loginActions.SUBMIT_LOGIN_SUCCESS:
        persistor.resume();
        return {
          ...state,
          ...action.payload
        };
      case loginActions.SUBMIT_LOGIN_FAILURE:
        return {
          ...state,
          ...action.payload
        };
      case loginActions.TOGGLE_FOCUS_PASSWORD:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
export default loginReducer;
