import axios from 'axios';

//Cấu hình cho đối tượng Axios
const axiosClient = axios.create({
    baseURL: 'http://rokida.billionaire-land.net/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
    },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something before request error
        return Promise.reject(error);
    }
);

//Add a respone interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    }, function (error) {
        // Any status code that falls outside the range of 2xx cause this function to trigger
        // Do something before request error

        const { config, status, data } = error.response;
        const URLs = ["/api/customer/login-account", "/api/customer/singup-account"];

        if (URLs.includes(config.url) && status === 400) {
            throw new Error(data.message);
        }

        return Promise.reject(error);
    }
);

export default axiosClient;