// Brilliant network wrapper courteousy of
// Works to create requests to a network resource and wraps the requests in
// A promise.  This works great with redux promise middlewares
// See the actions for post to see it in action located in ../actions/post.js
import request from './request';
import { curry } from 'lodash';

const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';

const Url = String;


// Take a resouce and paramaters and construct a url for a request.

const parameters = [
  'http://localhost:3000',
  'api'
];

const joinUrl = curry((array) => array.join('/'))

const buildParams = curry(
  (paramaters, resource, id = '') =>
    [...parameters, resource, id]
)

const apiCall = (type) => {
  switch (type) {
    case GET:

    default:

  }
}

const networkAPI = (resource) =>
  (type, options) =>

const defaultOptions = {
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const buildUrl = ({ id, resource } = {}) => {
  const parameters = [
    'http://localhost:3000',
    'api'
  ];

  if (resource) parameters.concat([resource]);
  if (id) parameters.concat([id]);
  return parameters.join('/');
};

const get = ({ path, options = {} }) => {
  return request(buildUrl(path), Object.assign(
    options,
    defaultOptions,
    { method: 'GET' }
  ));
};

const post = (path, body, options = {}) => {
  return request(buildUrl(path), Object.assign(
    options,
    defaultOptions,
    {
      method: 'POST',
      body: JSON.stringify(body)
    }
  ));
};

/**
* @function patch
* @description Make a PUT request.
* @param {string} path
* @param {object} body
* @param {object} options
* @returns {promise}
*/
const patch = (path, body, options = {}) => {
  return request(buildUrl(path), Object.assign(
    options,
    defaultOptions,
    { method: 'PUT' }
  ));
};

/**
* @function deleteOne
* @description Make a DELETE request.
* @param {string} path
* @param {object} options
* @returns {promise}
*/
const deleteOne = (path, options = {}) => {
  return request(buildUrl(path), Object.assign(
    options,
    defaultOptions,
    { method: 'DELETE' }
  ));
};

const Network = (resource) => {
  get,
  post,
  patch,
  deleteOne
};

export default Network;
