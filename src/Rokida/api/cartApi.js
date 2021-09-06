import axiosClient from './axiosClient';

const cartApi = {
  getAll() {
    const url = '/api/customer/get-shopping-cart';
    return axiosClient.get(url);
  },

  add(params) {
    const url = `/api/customer/add-shopping-cart/${params.slug}`;
    return axiosClient.post(url, params.data);
  },

  updateCartStatus(data) {
    const url = `/api/customer/cart/update-status-product`;
    return axiosClient.post(url, data);
  },

  confirmCart(data) {
    const url = `/api/customer/confirm-product`;
    return axiosClient.post(url, data);
  },

  confirmOrder(data) {
    const url = `/api/customer/order-confirmation`;
    return axiosClient.post(url, data);
  },
};

export default cartApi;