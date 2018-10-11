import { createAction } from 'redux-actions'
import { get } from 'lodash'

// ========================== LOGIN ACTION ========================================================
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN'
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS'
export const SUBMIT_LOGIN_FAILURE = 'SUBMIT_LOGIN_FAILURE'
export const TOGGLE_FOCUS_PASSWORD = 'TOGGLE_FOCUS_PASSWORD'
export const USER_LOGOUT = 'USER_LOGOUT'
export const MUST_LOGIN = 'MUST_LOGIN'

export const submitLogin = createAction(SUBMIT_LOGIN,
  (username, password, redirectTo) => ({
    redirectTo,
    user: {
      data: {
        username,
        password
      },
      isFetching: true
    }
  })
)

export const submitLoginSuccess = createAction(SUBMIT_LOGIN_SUCCESS,
  (user, redirectTo) => ({
    redirectTo,
    user: {
      data: user,
      isLogin: true,
      isFetching: false
    }
  })
)
export const submitLoginFailure = createAction(SUBMIT_LOGIN_FAILURE,
  err => ({
    user: {
      err,
      isFetching: false
    }
  })
)
export const toggleFocusPassword = createAction(TOGGLE_FOCUS_PASSWORD,
  (passwordFocus, fromPassword) => ({
    user: {
      isFetching: false,
      passwordFocus: !passwordFocus,
      fromPassword: !fromPassword
    }
  }))

// ========================== USER LOGIN ======================================================
export const mustLogin = createAction(MUST_LOGIN,
  (redirectTo, message) => ({
    redirectTo,
    message,
    user: {
      isFetching: false,
      isLogin: false
    }
  })
)
export const logout = createAction(USER_LOGOUT,
  message => ({
    user: {
      message,
      isFetching: false
    }
  })
)

export const getPasswordFocus = state => get(state, ['auth', 'user', 'passwordFocus'], false)
export const getUser = state => get(state, ['auth', 'user'], {})
export const getUserData = state => get(state, ['auth', 'user', 'data'], {})
export const getUserId = state => get(state, ['auth', 'user', 'data', 'id'], 0)
export const getUserToken = state => get(state, ['auth', 'user', 'data', 'token'], '')
export const getRedirectTo = state => get(state, ['auth', 'redirectTo'], '')
export const getMessage = state => get(state, ['auth', 'message'], '')
