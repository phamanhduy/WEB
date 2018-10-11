import fullReducer from '../_fullReducer';
import * as fullActions from '../_fullActions';

describe('fullReducer', () => {
  it('should return the initial state', () => {
    expect(fullReducer(undefined, {})).toEqual(fullActions.initialState);
  });

  it('should handle CONNECTED_TO_SERVER', () => {
    expect(fullReducer({}, fullActions.connectedToServer('xyz'))).toEqual({
      ...fullActions.connectedToServer('xyz').payload
    });
  });

  it('should handle DISCONNECTED_TO_SERVER', () => {
    expect(fullReducer({}, fullActions.disConnectedToServer())).toEqual({
      ...fullActions.disConnectedToServer('xyz').payload
    });
  });

  it('should handle RECEIVE_NOTIFICATION_SUCCESS', () => {
    expect(fullReducer({}, fullActions.receiveNotificationSuccess({}))).toEqual({
      ...fullActions.receiveNotificationSuccess({}).payload
    });
  });
});
