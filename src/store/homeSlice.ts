import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
interface HomeState {
  value: number;
  name: string;
}

const initialState: HomeState = { value: 0, name: 'home-state' };

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, changeName } = homeSlice.actions;

export const selectorName = (state: RootState) => state.home.name;

export default homeSlice.reducer;
