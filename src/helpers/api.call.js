/* eslint-disable */
import { get } from 'lodash';
import { createAPIMiddleware } from 'redux-api-call';

import { apiUrl, ssoConfig } from '../config/config';
import success from './success.json';

const getToken = (currentState) => {
  const pureToken = get(currentState, ['auth', 'user', 'data', 'token'], '');
  return `${pureToken}`;
};

const fetchWithTokenAdapter = getState => (req) => {
  const state = getState();
  const token = getToken(state);
  const { endpoint } = req;
  const newHeaders = {
    ...req.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    authorization: token
  };
  return fetch(endpoint, { ...req, headers: newHeaders }).then(res => res.json());
};
export const apiMiddlewareHook = createAPIMiddleware(fetchWithTokenAdapter);

export const authentication = {
  // submitLoginMock: () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       return resolve(success)
  //     }, 1000)
  //   })
  // },
  submitLogin: (username, password) => {
    return fetch(`${apiUrl}/public/auth/login`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    ).then(response => response.json());
  },
  submitRegister: (username, email, password) => {
    return fetch(`${apiUrl}/public/register`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      }
    ).then(response => response.json());
  }
};
