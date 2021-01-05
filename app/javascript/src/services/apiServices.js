const axios = require('axios')

export const ApiService = {
  getStoreScripts(params) {
    return axios({
      method: 'get',
      url: '/api/store_script_details',
      params,
    });
  },

  updateScript(params) {
    return axios({
      method: 'post',
      url: '/api/update_script',
      params,
    });
  },

  updateStoreProperty(params) {
    return axios({
      method: 'post',
      url: '/api/update_store_property',
      params,
    });
  },
};
