import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { history } from './store'
// Layouts
import Full from './layouts/Full/index'
import Simple from './layouts/Simple'
import SiteLayout from './layouts/Site'

// Common page
import NotFound from './views/NotFound/index'
import ErrorPage from './views/ErrorPage/index'

// CMS
import HomePage from './views/Cms/HomePage/index'
import About from './views/Cms/About/index'
import LoginPage from './views/Site/Login'
import SignupPage from './views/Site/Signup'

// SITE
import Rooms from './views/Site/ClassRoom/index'
import Feeds from './views/Site/Feeds/index'


export default (
  <Router history={history}>
    {/* CMS QUẢN LÝ */}
    <Route path="admin" name="Admin" component={Full}>
      <IndexRoute component={HomePage}/>
      <Route path="/admin/home" name="Homepage" component={HomePage}/>
      <Route path="/admin/about" name="About" component={About}/>
    </Route>


    <Route path="users/" name="Account" component={Full}>
    </Route>
    <Route path="auth/" name="Authentication" component={Simple}>
      <IndexRoute component={LoginPage}/>
      <Route path="login" name="Login" component={LoginPage}/>
      <Route path="signup" name="SignupPage" component={SignupPage}/>
    </Route>


    <Route path="/room" name="Rooms" component={Simple}>
      <IndexRoute component={Rooms}/>
      <Route path="/room" name="Rooms" component={Rooms}/>
    </Route>

    <Route path="/" name="Feeds" component={SiteLayout}>
      <IndexRoute component={Feeds}/>
    <Route path="/" name="Feeds" component={Feeds} />
    </Route>


    <Route path='*' component={NotFound}/>
    <Route path="err/" name="ErrorPage" component={Simple}>
      <IndexRoute component={ErrorPage}/>
      <Route path="err" name="ErrorPage" component={ErrorPage}/>
    </Route>
  </Router>
)
