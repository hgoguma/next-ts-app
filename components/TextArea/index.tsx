import React, { FC, useCallback, useEffect, useState } from "react"
import { TextAreaProp } from '@/types/test/index'

const TextArea: FC<TextAreaProp> = ({ questionModel, disabled }) => {
  const [value, setValue] = useState('')
  useEffect(() => {
    // setValue(questionModel.itemTitle)
  }, [])

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [value])

  return (
    <>
      <textarea disabled={disabled} value={value} onChange={(e) => onChange(e)}>
      </textarea>
      <button onClick={() => setValue('')}>리셋</button>
    </>
  )
}

export default TextArea