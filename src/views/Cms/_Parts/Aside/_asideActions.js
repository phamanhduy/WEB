import { createAction } from 'redux-actions';
import { get } from 'lodash';

export const PING = 'PING';
export const PONG = 'PONG';

export const ping = () => createAction(PING);
export const pong = () => createAction(PONG);


export const getUser = state => get(state, ['auth', 'user', 'data'], {});
