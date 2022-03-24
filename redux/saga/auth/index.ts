import { all, fork, call, takeEvery, put } from 'redux-saga/effects'
import { userAuthActions } from '@/redux/reducers/auth'
import { doAxios } from '@/utils/api'
import { IUserInfoResponse } from 'types/api/common'

function userInfoAPI (payload) {
  const path = `common/mainView/getInfo`
  return doAxios<IUserInfoResponse>(path, payload)
}

function* userInfoReqSaga (action) {
  const { success, error } = userAuthActions
  try {
    const result = yield call(userInfoAPI, action.payload)
    yield put({ type: success, payload: result })
  } catch (e) {
    console.log(e)
    yield put({ type: error })
  }
}

function* watchUserInfoReq () {
  const { request } = userAuthActions
  yield takeEvery(request, userInfoReqSaga)
}

export default function* auth () {
  yield all([
    fork(watchUserInfoReq)
  ])
}