import { createAction } from 'redux-actions';
import { actions as toastrActions } from 'react-redux-toastr';
import { get } from 'lodash';

export const initialState = {
  toastMessage: {},
  notification: {
    data: {},
    ignore: true
  },
  rehydrated: false,
  isConnectedToServer: false,
  isReload: false,
  asideActiveTab: 1,
  asideIsOpen: true,
  sidebarIsOpen: false,
  sidebarIsMinimize: false
};
export const CONNECTED_TO_SERVER = 'CONNECTED_TO_SERVER';
export const DISCONNECTED_TO_SERVER = 'DISCONNECTED_TO_SERVER';
export const RECEIVE_NOTIFICATION_SUCCESS = 'RECEIVE_NOTIFICATION_SUCCESS';
export const CHANGE_ASIDE_TAB = 'CHANGE_ASIDE_TAB';
export const TOGGLE_ASIDE = 'TOGGLE_ASIDE';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_SIDEBAR_MINIMIZE = 'TOGGLE_SIDEBAR_MINIMIZE';


export const changeAsideTab = createAction(CHANGE_ASIDE_TAB,
  tab => ({
    asideActiveTab: tab
  })
);
export const toggleAside = createAction(TOGGLE_ASIDE,
  asideIsOpen => ({
    asideIsOpen
  })
);
export const toggleSidebar = createAction(TOGGLE_SIDEBAR,
  sidebarIsOpen => ({
    sidebarIsOpen
  })
);
export const toggleSidebarMinimize = createAction(TOGGLE_SIDEBAR_MINIMIZE,
  sidebarIsMinimize => ({
    sidebarIsMinimize
  })
);


export const connectedToServer = createAction(CONNECTED_TO_SERVER,
  clientId => ({
    isConnectedToServer: true,
    isReload: false,
    clientId
  })
);
export const disConnectedToServer = createAction(DISCONNECTED_TO_SERVER,
  () => ({
    isConnectedToServer: false,
    isReload: true
  })
);

export const receiveNotificationSuccess = createAction(RECEIVE_NOTIFICATION_SUCCESS,
  notification => ({
    notification: {
      data: notification,
      ignore: false
    }
  })
);

export const toastMessage =
  (title, message, options) => (
    toastrActions.add({
      type: options.status,
      title,
      message,
      options
    })
  );

export const getToastMessage = state => get(state, ['app', 'toastMessage'], false);
export const getNotifications = state => get(state, ['app', 'notification'], false);
export const getRehydrated = state => get(state, ['app', 'rehydrated'], false);
export const getIsConnectedToServer = state => get(state, ['app', 'isConnectedToServer'], false);
export const getIsReload = state => get(state, ['app', 'isReload'], false);
export const getAsideActiveTab = state => get(state, ['app', 'asideActiveTab'], false);
export const getSidebarIsOpen = state => get(state, ['app', 'sidebarIsOpen'], false);
export const getAsideIsOpen = state => get(state, ['app', 'asideIsOpen'], false);
export const getSidebarIsMinimize = state => get(state, ['app', 'sidebarIsMinimize'], false);
