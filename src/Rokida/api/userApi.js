import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = '/api/customer/login-account';
    return axiosClient.post(url, data);
  },
  register(data) {
    const url = '/api/customer/singup-account'
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = '/api/customer/update-account'
    return axiosClient.post(url, data);
  }
}

export default userApi;
