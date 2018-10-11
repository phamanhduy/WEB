import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as actions from './_signupActions'
import { Button, Form, Divider } from 'semantic-ui-react'
import './style.css'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
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

	handleChangeUsername = (e) => {
		this.setState({ username: e.target.value })
	}

	handleSubmit = () => {
		const { email, password, username } = this.state
		this.props.submitSignup(username, email, password, '/auth/login')
	}
  render() {
    const { password, email, username } = this.state
    const { user } = this.props
    
      return (
        <div id="wrapper_login">
          <div className="section_left">
            <h3 style={{textAlign: 'center'}}>Đăng ký tài khoản</h3>
            <Form onSubmit={this.handleSubmit} loading={user.isFetching}>
              <Form.Field>
                <label>Username</label>
                <input onChange={this.handleChangeUsername} defaultValue={username} placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input onChange={this.handleChangeEmail} defaultValue={email} placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input onChange={this.handleChangePassword} defaultValue={password} placeholder='Password' type='password' />
              </Form.Field>
              <Form.Button color='violet' fluid content='Submit' />
              <Divider horizontal>Or</Divider>
              <Button color="green" fluid onClick={() => { browserHistory.push('/auth/login') }}> Login Now </Button>
            </Form>
          </div>
          <div className="section_right"> </div>
        </div>
      )
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  redirectTo: state.auth.redirectTo
})
const mapDispatchToProps = {
  submitSignup: actions.submitSignup
}
const SignupForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default SignupForm
