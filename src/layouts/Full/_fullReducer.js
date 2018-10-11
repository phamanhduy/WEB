import * as actions from './_fullActions';

const fullReducer = (state = actions.initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_ASIDE:
      return {
        ...state,
        ...action.payload
      };
    case actions.TOGGLE_SIDEBAR:
      return {
        ...state,
        ...action.payload
      };
    case actions.TOGGLE_SIDEBAR_MINIMIZE:
      return {
        ...state,
        ...action.payload
      };
    case actions.CHANGE_ASIDE_TAB:
      return {
        ...state,
        ...action.payload
      };
    case actions.RECEIVE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case actions.CONNECTED_TO_SERVER:
      return {
        ...state,
        ...action.payload
      };
    case actions.DISCONNECTED_TO_SERVER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
export default fullReducer;
