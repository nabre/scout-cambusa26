import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const createRootReducer = (asyncReducers = {}) => {
  return combineReducers({
    ...asyncReducers
  });
};

export const store = configureStore({
  reducer: createRootReducer()
});

export const injectReducer = (key: string, asyncReducer: unknown): void => {
  (store as any).asyncReducers = { ...(store as any).asyncReducers, [key]: asyncReducer };
  store.replaceReducer(createRootReducer((store as any).asyncReducers));
};