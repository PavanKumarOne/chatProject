import axios from 'axios';
import {store} from './store';
import {request, response} from './interceptor';
import {isAndroid} from '../utility/platformUtils';
import DeviceInfo from 'react-native-device-info';

export const contentType = 'application/json';

const BASE_URL = 'http://165.22.219.188:3000/v1/';

let appVersion = DeviceInfo.getReadableVersion();
let deviceVersion = DeviceInfo.getSystemVersion();
let deviceOs = isAndroid ? 'android' : 'ios';

export function apiConfig() {
  const state = store.getState();
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
      Authorization: state.authReducer?.data?.token
        ? `Bearer ${state.authReducer?.data?.token}`
        : '',
      appVersion,
      deviceVersion,
      deviceOs,
    },
  });

  const requestInterceptor = request();
  const responseInterceptor = response();

  axiosInstance.interceptors.request.use(
    requestInterceptor.onFulfilled,
    requestInterceptor.onRejected,
  );
  axiosInstance.interceptors.response.use(
    responseInterceptor.onFulfilled,
    responseInterceptor.onRejected,
  );
  return axiosInstance;
}

export const ApiHandler = async ({endPoint, method, reqParam, config = {}}) => {
  // API calling
  return await apiConfig()[`${method}`](endPoint, reqParam, config);
};
