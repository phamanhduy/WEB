import * as actions from '../_fullActions';

describe('Action creators', () => {
  it('should create an action to change aside tab', () => {
    const asideActiveTab = 1;
    const expectedAction = {
      type: actions.CHANGE_ASIDE_TAB,
      payload: {
        asideActiveTab
      }
    };
    expect(actions.changeAsideTab(asideActiveTab)).toEqual(expectedAction);
  });
  it('should create an action to toggle sidebar', () => {
    const sidebarIsOpen = false;
    const expectedAction = {
      type: actions.TOGGLE_SIDEBAR,
      payload: {
        sidebarIsOpen
      }
    };
    expect(actions.toggleSidebar(sidebarIsOpen)).toEqual(expectedAction);
  });
  it('should create an action to toggle aside', () => {
    const asideIsOpen = false;
    const expectedAction = {
      type: actions.TOGGLE_ASIDE,
      payload: {
        asideIsOpen
      }
    };
    expect(actions.toggleAside(asideIsOpen)).toEqual(expectedAction);
  });
  it('should create an action to toggle sidebar minimize', () => {
    const sidebarIsMinimize = true;
    const expectedAction = {
      type: actions.TOGGLE_SIDEBAR_MINIMIZE,
      payload: {
        sidebarIsMinimize
      }
    };
    expect(actions.toggleSidebarMinimize(sidebarIsMinimize)).toEqual(expectedAction);
  });
  it('should create an action to connected to server', () => {
    const clientId = 'xyz';
    const expectedAction = {
      type: actions.CONNECTED_TO_SERVER,
      payload: {
        isConnectedToServer: true,
        isReload: false,
        clientId
      }
    };
    expect(actions.connectedToServer(clientId)).toEqual(expectedAction);
  });
  it('should create an action to disconnected to server', () => {
    const expectedAction = {
      type: actions.DISCONNECTED_TO_SERVER,
      payload: {
        isConnectedToServer: false,
        isReload: true
      }
    };
    expect(actions.disConnectedToServer()).toEqual(expectedAction);
  });
  it('should create an action to receiveNotificationSuccess', () => {
    const notification = {
      message: 'Test notification',
      theme: 'default'
    };
    const expectedAction = {
      type: actions.RECEIVE_NOTIFICATION_SUCCESS,
      payload: {
        notification: {
          data: notification,
          ignore: false
        }
      }
    };
    expect(actions.receiveNotificationSuccess(notification)).toEqual(expectedAction);
  });
  it('should create an action to toastMessage', () => {
    const toastMessage = {
      title: 'test',
      message: 'Test notification',
      options: {}
    };
    const expectedAction = {
      type: '@ReduxToastr/toastr/ADD',
      payload: {
        message: 'Test notification',
        options: {},
        title: 'test',
      }
    };
    expect(
      actions.toastMessage(toastMessage.title, toastMessage.message, toastMessage.options)
    ).toEqual(expectedAction);
  });
});
