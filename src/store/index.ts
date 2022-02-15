import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';

const rootReducer = combineReducers({
  home: homeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
