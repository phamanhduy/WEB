import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as actions from './_loginActions'
import packagejson from '../../../../package.json'
import InputGroupUsername from './components/InputGroupUsername'
import InputGroupPassword from './components/InputGroupPassword'
import ButtonLogin from './components/ButtonLogin'
import * as formHelper from '../../../helpers/form.helper'

const Login = ({
                 user,
                 redirectTo,
                 submitLogin,
                 toggleFocusPassword,
                 passwordFocus,
                 fromPassword,
                 handleSubmit
               }) => (
  <div className="container">
    <div id="login" className="unloaded">
      <div className="wrapper">
        <div className="login">
          <form
            onSubmit={
              handleSubmit(
                ({
                   username,
                   password
                 }) =>
                  submitLogin(
                    username,
                    password,
                    redirectTo
                  )
              )
            }
            className="container offset1 loginform">
            <div id="owl-login" className={passwordFocus ? 'password' : ''}
                 onClick={() => {
                   if (fromPassword && !passwordFocus) {
                     toggleFocusPassword(!fromPassword, false)
                   } else {
                     toggleFocusPassword(!passwordFocus, false)
                   }
                 }}>
              <div className="eyes"></div>
              <div className="arm-up-right"></div>
              <div className="arm-up-left"></div>
              <div className="arm-down-left"></div>
              <div className="arm-down-right"></div>
            </div>
            <div className="pad">
              <div className="row justify-content-center">
                <p className="text-gray-dark">
                  <span className="text-gray-dark">{packagejson.name}</span><br/>
                </p>
                <p className="text-gray-dark">
                  <span className="badge-pill badge-primary">v{packagejson.version}</span>
                </p>
              </div>
              <InputGroupUsername
                name="username"
                type="text"
                placeholder="Username"
                validate={formHelper.required}
              />
              <InputGroupPassword
                name="password"
                type="password"
                placeholder="Password"
                validate={formHelper.required}
              />
            </div>
            <div className="form-actions">
              <div className="col-sm-12 col-md-6 offset-md-6 col-lg-6 offset-lg-6">
                <ButtonLogin isFetching={user.isFetching}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  user: state.auth.user,
  passwordFocus: actions.getPasswordFocus(state),
  redirectTo: state.auth.redirectTo
})
const mapDispatchToProps = {
  submitLogin: actions.submitLogin,
  toggleFocusPassword: actions.toggleFocusPassword
}
const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default reduxForm({ form: 'LoginForm' })(LoginForm)
