import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import * as actions from './_loginActions'
import { Button, Form, Checkbox, Divider } from 'semantic-ui-react'
import './style.css'

class Login extends Component {

  constructor(props) {
    super(props)
    // Don't call this.setState() here!
    this.state = {
      password: '',
      email: '',
      loading: false
    }

  }


  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSubmitLogin = () => {
    const { email, password } = this.state
    this.props.submitLogin(email, password, '/admin')
    // console.log('>>>>', this.props)
  }

  render() {
    const { password, email } = this.state
    // const {
      // user,
      // redirectTo,
      // submitLogin,
      // toggleFocusPassword,
      // passwordFocus,
      // fromPassword,
      // handleSubmit
    // } = this.props

    return (
      <div id="wrapper_login">
        <div className="section_left">
          <h3 style={{ textAlign: 'center' }}>Đăng nhập</h3>
          <Form onSubmit={this.handleSubmitLogin}>
            <Form.Field>
              <label>Email</label>
              <input onChange={this.handleChangeEmail} defaultValue={email} placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input onChange={this.handleChangePassword} defaultValue={password} placeholder='Password' type='password' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='Ghi nhớ mất khẩu' />
            </Form.Field>
            <Form.Button color='violet' fluid content='Login' />
          </Form>
          <Divider horizontal>Or</Divider>
          <Button color='green' fluid onClick={() => browserHistory.push('/auth/signup')}>
            Sign Up Now
            </Button>
        </div>
        <div className="section_right">

        </div>
      </div>
    )
  }
}
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
