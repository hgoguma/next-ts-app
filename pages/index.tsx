import { useCallback, useEffect, useState } from 'react'
import { userAuthActions } from '@/redux/reducers/auth'
import { useAppSelector, useAppDispatch } from '@/redux/store'
import Question from '@/components/Question'

const Home = () => {
  const { userName } = useAppSelector((state) => state.auth.data)
  const dispatch = useAppDispatch()
  const test = useCallback(async () => {
    const loginId = `AQ0001`
    const params = { loginId }
    const { request } = userAuthActions
    dispatch(request(params))
  }, [])
  
  const initValue = {
    radioValue: false,
  }

  const dummyData = {
    ridSurveyItem: 'test',
    itemNo: 1,
    itemTitle: 'itemTitle',
    fieldTypeCode: 'test',
    imagePath: 'test',
    imageContents: 'test',
    itemAttrList: ['a', 'b'],
    isOptional: 'test',
  }

  return (
    <div>
      {/* <Question {...dummyData}/> */}
      {/* <button onClick={test}>action 테스트</button>
      {userName} */}
    </div>
  )
}

export default Home
