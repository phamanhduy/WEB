import { toastr } from 'react-redux-toastr';
import { browserHistory } from 'react-router';
import { REHYDRATE } from 'redux-persist/constants';
import { get } from 'lodash';
import { authentication as authAPI } from '../../../helpers/api.call';
import { socketClient } from '../../../index';
import * as actions from './_loginActions';
import { baseUrl } from '../../../config/config';

const loginMiddleware = store => next => (action) => {
  next(action);
  const currentState = store.getState();
  const token = get(currentState, ['auth', 'user', 'data', 'token'], '');
  const userId = get(currentState, ['auth', 'user', 'data', 'id'], false);
  const isLogin = get(currentState, ['auth', 'user', 'isLogin'], false);
  const redirectLoginUrl = `${baseUrl}/auth/login`;
  switch (action.type) {
    /* Case */
    case actions.MUST_LOGIN:
      window.location = redirectLoginUrl;
      break;
    case actions.USER_LOGOUT:
      store.dispatch(actions.mustLogin(window.location.pathname));
      break;
    case REHYDRATE:
      if ((userId === false || isLogin === false)
        && window.location.pathname !== '/auth/login'
      ) {
        store.dispatch(actions.mustLogin(window.location.pathname));
      }
      break;
    case actions.SUBMIT_LOGIN:
      authAPI.submitLoginMock(
        get(action, ['payload', 'user', 'data', 'username'], ''),
        get(action, ['payload', 'user', 'data', 'password'], '')
      )
        .then((res) => {
          if (res.success === true) {
            store.dispatch(
              actions.submitLoginSuccess(res.payload, action.payload.redirectTo));
          } else {
            store.dispatch(actions.submitLoginFailure(res.payload));
          }
        })
        .catch(err => actions.submitLoginFailure(err));
      break;
    case actions.SUBMIT_LOGIN_SUCCESS:
      socketClient.io.opts.query = `token=${token}`;
      socketClient.open();
      browserHistory.push(action.payload.redirectTo !== '/auth/login' ? action.payload.redirectTo : '/');
      break;
    case actions.SUBMIT_LOGIN_FAILURE:
      toastr.error('Không thành công', 'Vui lòng kiểm tra lại thông tin');
      break;
    default:
      break;
  }
};
export default loginMiddleware;
