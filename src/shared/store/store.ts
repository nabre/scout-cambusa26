import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const createRootReducer = (asyncReducers = {}) => {
  return combineReducers({
    ...asyncReducers
  });
};

const store = configureStore({
  reducer: createRootReducer()
});

// Esportazione del tipo RootState
export type RootState = ReturnType<typeof store.getState>;

// Esportazione del tipo per il dispatch
export type AppDispatch = typeof store.dispatch;

export default store;

/**
 * Injects a reducer into the Redux store.
 * 
 * @param key - The key under which the reducer will be stored.
 * @param asyncReducer - The reducer to be injected into the store.
 */
export const injectReducer = (key: string, asyncReducer: unknown): void => {
  (store as any).asyncReducers = { ...(store as any).asyncReducers, [key]: asyncReducer };
  store.replaceReducer(createRootReducer((store as any).asyncReducers));
};