import { combineReducers } from 'redux'
import authSlice from '@/redux/reducers/auth'

const rootReducer = combineReducers({
  auth: authSlice
})

export default rootReducer