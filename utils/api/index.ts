import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ICommonRequest, ICommonResponse } from 'types/api/common';

const customAxios: AxiosInstance = axios.create({
  headers: {
    access_token: `accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWludGV0IiwibG9naW5JZCI6InF1aW50ZXQiLCJleHAiOjE2NDgxODgzMTl9.v-4pyDt-HX-WdDFTED6ZMoYc4oIoD0RmvSNcJjV-_58exP97VhodtS1D34e5DC7QALcVNLlH4ewpy9ahvxVXeQ; refreshToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWludGV0IiwibG9naW5JZCI6InF1aW50ZXQiLCJleHAiOjE2NDgyNzQxMTl9.s4VbA9OkN-QLh_lBLG-twgg18f56Nah1I9XnGsAu8eD7-ypOseejQAWr9jXDWBcaPsMoksmHRF8eI37wFe07Kw`
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