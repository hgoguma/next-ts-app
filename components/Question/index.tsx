import { FC, useCallback, useEffect, useState } from 'react'
import Radio from '@/components/Radio'
import { QTQuestionModel, TextAreaProp, RadioProp } from '@/types/test/index'
import TextArea from '@/components/TextArea'

const Question = (props: QTQuestionModel) => {
  const [disabled, setDisabeld] = useState(false)

  const radioHandler = useCallback((radioValue: string) => {
    if (radioValue === '1') {
      setDisabeld(true)
    } else {
      setDisabeld(false)
    }
  }, [disabled])


  const radioProp: RadioProp = {
    questionModel: { ...props},
    handler: radioHandler
  }

  const textAreaProps: TextAreaProp = {
    questionModel: { ...props },
    disabled: disabled
  }

  // props
  return (
    <div>
      <Radio {...radioProp} />
      <TextArea  {...textAreaProps} >
      </TextArea>

    </div>
  )
}

export default Question