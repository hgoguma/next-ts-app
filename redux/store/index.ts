import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger';
import rootReducer from '../reducers'
import rootSaga from '../saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// store 에서 사용할 메소드도 여기서 등록 가능
const store = configureStore({
  reducer: rootReducer,
  // middleware: [logger],
  middleware: [sagaMiddleware, logger],
  devTools: process.env.NODE_ENV !== 'production'
})
// saga middleware 실행
sagaMiddleware.run(rootSaga)

const createStore = () => {
  return store
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// next wrapper 
export default createWrapper(createStore)
