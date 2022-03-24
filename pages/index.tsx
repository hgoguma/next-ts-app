import { useCallback, useEffect, useState } from 'react'
import { userAuthActions } from '@/redux/reducers/auth'
import { useAppSelector, useAppDispatch } from '@/redux/store'

const Home = () => {
  const { userName } = useAppSelector((state) => state.auth.data)
  const dispatch = useAppDispatch()
  const test = useCallback(async () => {
    const loginId = `AQ0001`
    const params = { loginId }
    const { request } = userAuthActions
    dispatch(request(params))
  }, []);

  return (
    <div>
      Home 입니다요
    </div>
  )
}

export default Home
