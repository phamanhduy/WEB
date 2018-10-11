import { createAction } from 'redux-actions'

// ========================== LOGIN ACTION ========================================================
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP'
export const SUBMIT_SIGNUP_SUCCESS = 'SUBMIT_SIGNUP_SUCCESS'
export const SUBMIT_SIGNUP_FAILURE = 'SUBMIT_SIGNUP_FAILURE'

export const submitSignup = createAction(SUBMIT_SIGNUP,
  (username, email, password, redirectTo) => ({
    redirectTo,
    user: {
      data: {
        username,
        email,
        password
      },
      isFetching: true
    }
  })
)

export const submitSignupSuccess = createAction(SUBMIT_SIGNUP_SUCCESS,
  (user, redirectTo) => ({
    redirectTo,
    user: {
      data: user,
      isLogin: true,
      isFetching: false
    }
  })
)
export const submitSignupFailure = createAction(SUBMIT_SIGNUP_FAILURE,
  err => ({
    user: {
      err,
      isFetching: false
    }
  })
)
