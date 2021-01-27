const axios = require('axios')

export const ApiService = {
  updateStorePayment(params) {
    return axios({
      method: 'post',
      url: '/api/payment',
      params,
    });
  },

  getStoreDetails(params) {
    return axios({
      method: 'get',
      url: 'api/store_details',
      params,
    });
  },

  updateStoreDataSetId(params) {
    return axios({
      method: 'post',
      url: '/api/update_store_data_set_id',
      params,
    });
  },

  updateStorePropertyId(params) {
    return axios({
      method: 'post',
      url: '/api/update_store_property_id',
      params,
    });
  },
};
