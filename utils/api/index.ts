import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ICommonRequest, ICommonResponse } from 'types/api/common';

const customAxios: AxiosInstance = axios.create({
  headers: {
    access_token: `refreshToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBUTAwMDEiLCJsb2dpbklkIjoiQVEwMDAxIiwiZXhwIjoxNjQ0OTc0MDIzfQ.4zT_s8R6WRT612HFTkb7we6ACCRtw3EnFs59bf_YbkzENxtH99vJPqTsA7nT1NK5QOS7hJGpB4N4pJYmLcgaDA; accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBUTAwMDEiLCJsb2dpbklkIjoiQVEwMDAxIiwiZXhwIjoxNjQ0OTA2MjE5fQ.GX6WVxOnImpoMElfu4_QWij9d_bbYLHk88hkJl_tByNo-lqnzkdn3sGir-m4QYFEK8d0JnZ13Hd1Ya2vDR4UMw`
  }
});

/**
  * API 통신
  * @function
  * @param errorHandler {function} 에러 발생시 처리할 함수
  * @returns {object}
  * @desc
  */
export const doAxios = async <T extends ICommonResponse>(path: string, params: ICommonRequest | object) => {
  try {
    const domain = process.env.NEXT_PUBLIC_DEV_DOMAIN
    const { status, data }: AxiosResponse<T> = await customAxios.post(`${domain}/${path}`, params, {
      withCredentials: true
    });
    return status < 500 ? data : null
  } catch (err) {
    console.log(err)
  }
};