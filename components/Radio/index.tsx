import React, { FC, useCallback, useEffect, useState } from "react"
import { RadioProp } from '@/types/test/index'

const Radio = (props: RadioProp) => {
  const change = useCallback((value) => {
    props.handler(value)
  }, [])
  const radioArray = [
    {
      label: '비활성화',
      value: '1'
    },
    {
      label: '활성화',
      value: '2'
    }
  ]
  return (
    <>
      {
        radioArray.map(item => {
          return (
            <div key={item.value}>
              <label>{item.label}</label>
              <input type="radio" name="radio" value={item.value} onChange={() => change(item)} />
            </div>
          ) 
        })
      }
    </>
  )
}

export default Radio