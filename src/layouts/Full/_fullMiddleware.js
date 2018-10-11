import * as actions from './_fullActions';
// import { get } from 'lodash';


const fullMiddleware = () => next => (action) => {
  next(action);
  switch (action.type) {
    case actions.TOGGLE_ASIDE:
      document.body.classList.toggle('aside-menu-hidden');
      break;
    case actions.TOGGLE_SIDEBAR:
      document.body.classList.toggle('sidebar-hidden');
      break;
    case actions.TOGGLE_SIDEBAR_MINIMIZE:
      document.body.classList.toggle('sidebar-minimized');
      break;
    default:
      break;
  }
};
export default fullMiddleware;
