import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const requset = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
});

requset.interceptors.request.use(function (config) {
    // Do something before request is sent
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
requset.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (err) {
    // Do something with response error
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                console.log("未授权访问");
                break;
            default:
                console.log("其他错误信息");
        }
    }
    return Promise.reject(err);
});

export default requset;