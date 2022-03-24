import { createSlice, PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'

interface GenericState <T> {
  data: T; // 
  loading: boolean;
  error: boolean;
  key: string; // api response key
}

// T : state
export const createGenericSlice = <T, Reducers extends SliceCaseReducers<GenericState<T>>> ({
  name = '',
  initialState,
  reducers
}: {
  name: string
  initialState: GenericState<T>
  reducers: ValidateSliceCaseReducers<GenericState<T>, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: {
      request (state: GenericState<T>, action: PayloadAction<any>) {
        state.loading = true
      },
      success (state: GenericState<T>, action: PayloadAction<any>) {
        state.data = action.payload[state.key]
        state.loading = false
      },
      error (state: GenericState<T>) {
        state.loading = false
        state.error = true
      },
      ...reducers,
    },
  })
}