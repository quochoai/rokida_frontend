import axiosClient from './axiosClient';

const productApi = {
    getAll(params) {
        const url = '/api/get-all-products';
        return axiosClient.get(url, { params });
    },

    login(params) {
        console.log(params)
        const url = '/api/customer/login-account';
        return axiosClient.post(url, params);
    },

    signup(params) {
        console.log(params)
        const url = '/api/customer/signup-account';
        return axiosClient.post(url, params);
    },

    get(slug) {
        const url = `/api/customer/get-detail-product?slug=${slug}`;
        return axiosClient.get(url);
    },

    // add(data) {
    //     const url = '/products';
    //     return axiosClient.post(url, data);
    // },

    // update(data) {
    //     const url = `/products/${data.id}`;
    //     return axiosClient.patch(url, data);
    // },

    // remove(id) {
    //     const url = `/products/${id}`;
    //     return axiosClient.delete(url);
    // }
};

export default productApi;