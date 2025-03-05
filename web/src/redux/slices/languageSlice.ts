import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
type LanguageState = {
    value: string
}

// Define the initial state using that type
const initialState: LanguageState = {
  value: "vi",
} satisfies LanguageState as LanguageState

export const languageSlice = createSlice({
  name: 'language',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { changeLanguage } = languageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default languageSlice.reducer