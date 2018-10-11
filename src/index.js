import React from 'react'
import ReactDOM from 'react-dom'
import { persistStore } from 'redux-persist'
import io from 'socket.io-client'
import ReactGA from 'react-ga'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { get } from 'lodash'
import * as config from './config/config'
import routes from './routes'
import { store, history } from './store'
import { connectedToServer, getAsideIsOpen, getSidebarIsOpen, getSidebarIsMinimize } from './layouts/Full/_fullActions'
import { getUserToken } from './views/Site/Login/_loginActions'
import * as SocketCommonEventListeners from './services/SocketCommonEventListeners'

// Scenario:
// 1. Declare && Regist Socket
// 2. Declare persistor to persist data on LocalStorage
// 3. Declare Google Analytics for logging page view
// 4. Regist ReactDOM render into Root element
export const socket = io(`${config.apiUrl}`, {
  pingInterval: 2000,
  pingTimeout: 5000,
  autoConnect: false,
  reconnection: true,
  forceNew: true,
  transports: ['websocket'],
  upgrade: false
})

export const socketClient = socket.on('connect', () => {
  // const currentState = store.getState()
  // const isReload = get(currentState, ['app', 'isReload'], false)
  // if (isReload) {
  //   window.location.reload()
  // }
  store.dispatch(connectedToServer(socket.id))
})
// Regist Event Listeners
SocketCommonEventListeners.onConnectionTimeout(socketClient)
SocketCommonEventListeners.onError(socketClient)
SocketCommonEventListeners.onReconnect(socketClient)
SocketCommonEventListeners.onReconnectAttempt(socketClient)
SocketCommonEventListeners.onReconnecting(socketClient)
SocketCommonEventListeners.onReconnectError(socketClient)
SocketCommonEventListeners.onReconnectFailed(socketClient)
SocketCommonEventListeners.onPing(socketClient)
SocketCommonEventListeners.onPong(socketClient)
SocketCommonEventListeners.onDisconnect(socketClient, store)

export const persistor = persistStore(store, {
  blacklist: [
    'routing',
    'toastr',
    'form',
    'api_calls',
    'aside',
    'about'
  ]
}, () => {
  // console.log('rehydration complete')
  const currentState = store.getState()
  const asideIsOpen = getAsideIsOpen(currentState)
  asideIsOpen ? document.body.classList.remove('aside-menu-hidden') : document.body.classList.add('aside-menu-hidden')
  const sidebarIsOpen = getSidebarIsOpen(currentState)
  sidebarIsOpen ? document.body.classList.remove('sidebar-hidden') : document.body.classList.add('sidebar-hidden')
  const sidebarIsMinimize = getSidebarIsMinimize(currentState)
  sidebarIsMinimize ? document.body.classList.add('sidebar-minimized') : document.body.classList.remove('sidebar-minimized')
  const token = getUserToken(currentState)
  if (token !== '') {
    socketClient.io.opts.query = `token=${token}`
    socketClient.open()
  }
})

ReactGA.initialize(config.googleAnalyticsID)
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} onUpdate={logPageView}/>
  </Provider>,
  document.getElementById('root')
)
