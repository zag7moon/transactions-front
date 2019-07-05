import axios from '../axios';

const timeout = 60000;
export default {
  headers(state) {
    return {
      'Authorization': `Bearer ${state.auth.model.access}`
    };
  },

  GET_BLOB(state, getters) {
    return (url, params) =>
      axios
        .get(url, { params, responseType: 'blob', headers: getters.headers })
        .then(response => ({
          blob: response.data,
          fileName: response.headers['content-disposition'].match('"(.*)"')[1]
        }));
  },

  GET_RAW(state, getters) {
    return (url, headers) =>
      axios.get(url, { headers: headers || getters.headers, timeout });
  },

  GET(state, getters) {
    return (url, params) =>
      axios
        .get(url, { params, headers: getters.headers, timeout })
        .then(response => response.data || {});
  },

  DELETE(state, getters) {
    return url =>
      axios
        .delete(url, { headers: getters.headers, timeout })
        .then(response => response.data || {});
  },

  POST(state, getters) {
    return (url, params) =>
      axios
        .post(url, params, { headers: getters.headers, timeout })
        .then(response => response.data || {});
  },

  PUT(state, getters) {
    return (url, params) =>
      axios
        .put(url, params, { headers: getters.headers, timeout })
        .then(response => response.data || {});
  }
};
