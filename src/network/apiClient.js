import axios from 'axios';
import {request, response} from './interceptor';
import {isAndroid} from '../utility/platformUtils';
import DeviceInfo from 'react-native-device-info';
import {HelperService} from '../services/helperService';


const BASE_URL = 'http://165.22.219.188:3000/v1/';

let appVersion = DeviceInfo.getReadableVersion();
let deviceVersion = DeviceInfo.getSystemVersion();
let deviceOs = isAndroid ? 'android' : 'ios';

export const contentType = 'application/json';

export function apiConfig() {
  const token = HelperService.token;

  const url = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: contentType,
      'Content-Type': contentType,
      Authorization: token
        ? `Bearer ${token}`
        : '',
    },
    appVersion,
    deviceVersion,
    deviceOs,
  });
  return url;
}

export const ApiHandler = async ({endPoint, method, reqParam, config = {}}) => {
  const response = await apiConfig()[`${method}`](endPoint, reqParam, config);
  return response;
};