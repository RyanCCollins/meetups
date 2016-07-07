import fetch from 'isomorphic-fetch';
import request from 'utils';

const defaultOptions = {
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const baseParams = [
  'localhost:3000',
  'api'
];

const buildUrl = (route) =>
  [...baseParams, ...route].join('/');

export const Network = {
  /**
  * @function getAll
  * @description Make a GET request to the api for a collection of resources, returning a promise.
  * @param {string} path - the path of the RESTful resource
  * @param {object} options - optional options object
  * @returns {promise}
  */
  getAll(path, options = {}) {
    return request(buildUrl([path]), Object.assign(
      options,
      defaultOptions,
      {
        method: 'GET'
      }
    ));
  },
  /**
  * @function getOne
  * @description Make a GET request to the api for a single resource by ID, returning a promise.
  * @param {string} path - the path of the RESTful resource
  * @param id - the id of the resource to get
  * @param {object} options - optional options object
  * @returns {promise}
  */
  getOne(path, id, options = {}) {
    return request(buildUrl([path, id]), Object.assign(
      options,
      defaultOptions,
      {
        method: 'GET'
      }
    ));
  },
  /**
  * @function post
  * @description Make a POST request to the api, returning a promise.
  * @param {string} path
  * @param {object} options - optional options object
  * @returns {promise}
  */
  post(path, body, options = {}) {
    return request(buildUrl([path]), Object.assign(
      options,
      defaultOptions,
      {
        method: 'POST',
        body: JSON.stringify(body)
      }
    ));
  },
  /**
  * @function patch
  * @description Make a PATCH request to the api, returning a promise.
  * @param {string} path - the path of the RESTful resource
  * @param id - the id of the resource to update
  * @param {object} body - data to put to the API
  * @param {object} options - optional options object
  * @returns {promise}
  */
  patch(path, id, body, options = {}) {
    return request(buildUrl([path, id]), Object.assign(
      options,
      defaultOptions,
      {
        method: 'PATCH',
        body: JSON.stringify(body)
      }
    ));
  },
  /**
  * @function put
  * @description Make a PUT request to the api, returning a promise.
  * @param {string} path - the path of the RESTful resource
  * @param id - the id of the resource to update
  * @param {object} body - data to put to the API
  * @param {object} options - optional options object
  * @returns {promise}
  */
  put(path, id, body, options = {}) {
    return request(buildUrl([path, id]), Object.assign(
      options,
      defaultOptions,
      {
        method: 'PUT',
        body: JSON.stringify(body)
      }
    ));
  },
  /**
  * @function delete
  * @description Make a DELETE request to the api, returning a promise.
  * @param {string} path - the path of the RESTful resource
  * @param id - the id of the resource to update
  * @param {object} options - optional options object
  * @returns {promise}
  */
  delete(path, id, options = {}) {
    return request(buildUrl([path, id]), Object.assign(
      options,
      defaultOptions,
      {
        method: 'DELETE'
      }
    ));
  }
};
