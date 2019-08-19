import axios from 'axios';
import userToken from '../utils/token';
import { API_ROOT } from '../utils/const';

class ApiAFactory {

  constructor({ url }) {
    this.url = url || API_ROOT;
    this.endpoints = {};
  }

  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */
  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints({ name }) {
    var endpoints = {}

    const resourceURL = `${this.url}/${name}`

    /**
     * GET
     */
    endpoints.get = (query, config = { headers: { 'x-token': userToken.getAccessToken() } }) =>
      axios.get(resourceURL, { params: { ...query }, ...config })

    /**
     * GET/{:ID}
     */
    endpoints.getOne = (id, config = { headers: { 'x-token': userToken.getAccessToken() } }) =>
      axios.get(`${resourceURL}/${id}`, { ...config })

    /**
     * GET WITH LINK
     */
    endpoints.getByLink = ({ link }, config = { headers: { 'x-token': userToken.getAccessToken() } }) =>
      axios.get(`${resourceURL}/${link}`, { ...config })

    /**
     * POST
     */
    endpoints.post = (data, config) => {
      const customHeaders = config && config.headers && { ...config.headers };

      return axios.post(resourceURL, data, {
        ...config,
        headers: {
          'x-token': userToken.getAccessToken(),
          ...customHeaders
        }
      });
    }

    /**
     * PUT
     */
    endpoints.put = (data, config) => {
      const customHeaders = config && config.headers && { ...config.headers };

      return axios.put(resourceURL, data, {
        ...config,
        headers: {
          'x-token': userToken.getAccessToken(),
          ...customHeaders
        }
      });
    }

    /**
     * UPDATE
     */
    endpoints.update = (toUpdate, config) => {
      const customHeaders = config && config.headers && { ...config.headers };
      const id = toUpdate && (toUpdate.id || toUpdate.get('id'));
      return axios.put(`${resourceURL}/${id}`, toUpdate, {
        ...config,
        headers: {
          'x-token': userToken.getAccessToken(),
          ...customHeaders
        }
      });
    }

    /**
     * PATCH
     */
    endpoints.patch = ({ id }, toPatch, config = { headers: { 'x-token': userToken.getAccessToken() } }) =>
      axios.patch(`${resourceURL}/${id}`, toPatch, { ...config })

    /**
     * DELETE
     */
    endpoints.delete = ({ id }, config = { headers: { 'x-token': userToken.getAccessToken() } }) =>
      axios.delete(`${resourceURL}/${id}`, { ...config })

    return endpoints;
  }
}

export default ApiAFactory;
