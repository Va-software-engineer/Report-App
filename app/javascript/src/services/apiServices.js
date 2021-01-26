const axios = require('axios')

export const ApiService = {
  updateStorePayment(params) {
    return axios({
      method: 'post',
      url: '/api/payment',
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
