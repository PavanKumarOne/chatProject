import {StorageKeys, StorageService} from '../services/storageService';

export const request = () => {
  const onFulfilled = async config => {
    const deviceToken = await StorageService.get(StorageKeys.deviceToken);
    const appToken = await StorageService.get(StorageKeys.appToken);

    if (!appToken) {
      return config;
    }
    config.headers.Authorization = `Bearer ${appToken}`;
    return config;
  };

  const onRejected = error => error;

  return {onFulfilled, onRejected};
};

export const response = () => {
  const onFulfilled = value => value;

  const onRejected = async error => {
    // handle error

    // if (error.response && error.response.data) {
    //   const {data} = error.response;
    //   if (data.data && data.data.length > 0) {
    //     errorCode = data.data[0].error_code;
    //   } else if (data.error && data.error.length > 0) {
    //     errorCode = data.error[0].error_code;
    //   }
    // }

    const token = '';

    // If not a token expiry error, proceed as usual, or not a logged in user
    if (!token) {
      throw error;
    }

    //refresh token

    // try {
    //   const response = await this.client.post(REFRESH_TOKEN_ENDPOINT, {
    //     refresh: token,
    //   });
    //   const {data} = response.data;
    //   const tokens: IRefreshToken = {
    //     access_token: data.access,
    //     refresh_token: data.refresh,
    //   };
    //   StoreProviderService.loginSuccess(tokens);
    //   await StorageService.set(StorageKeys.USER, tokens);
    //   originalRequest.headers = {
    //     Authorization: `Bearer ${tokens.access_token}`,
    //   };
    //   if (originalRequest.data) {
    //     originalRequest.data = JSON.parse(originalRequest.data);
    //   }
    //   return await this.client.request(originalRequest);
    // } catch (e) {
    //   StoreProviderService.logoutUser();
    //   await StorageService.remove(StorageKeys.USER);
    //   throw e;
    // }
  };

  return {onFulfilled, onRejected};
};
