import { useCallback, useState, ChangeEvent, Dispatch, SetStateAction } from 'react'

export const useInput = <T> (inialValue: T) => {
  const [value, setValue]: [T, Dispatch<SetStateAction<T>>] = useState<T> (inialValue)
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as unknown as T
    setValue(value)
  }, [value])
  return [value, setValue, handleChange] as const
}