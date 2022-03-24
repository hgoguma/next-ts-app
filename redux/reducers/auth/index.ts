import { createGenericSlice } from '@/utils/redux';
import { IUserInfo } from 'types/api/common'

const initUserInfo: IUserInfo = {
  divisionCd: '',
  divisionNm: '',
  email: '',
  rankCd: '',
  rankNm: '',
  ridUser: '',
  userName: ''
}

const initialState = {
  data: initUserInfo,
  loading: false,
  error: false,
  key: 'userInfo'
}

const authSlice = createGenericSlice ({
  name: 'auth',
  initialState,
  reducers: {
    // magic (state) {
    //   state.loading = false
    // }
  },
});


export const userAuthActions = authSlice.actions;
export default authSlice.reducer;