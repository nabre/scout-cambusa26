
import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { Identifiable, DataStateWithStatus } from '../../types/reduxTypes';
import useApiReduce from '../reducers/useApiReduce';

export const createInitialState = <T>(): DataStateWithStatus<T> => ({
    data: [],
    status: 'idle',
    error: null
});

export function createCrudSlice<T extends Identifiable>(
    name: string,
    apiPath: string,
    additionalReducers?: SliceCaseReducers<DataStateWithStatus<T>>
) {
    const { api, extraReducers } = new useApiReduce<T>(apiPath);

    const slice = createSlice({
        name,
        initialState: createInitialState<T>(),
        reducers: {
            resetStatus: (state) => {
                state.status = 'idle';
                state.error = null;
            },
            ...additionalReducers,
        },
        extraReducers,
    });

    const { actions, reducer } = slice;

    return {
        slice,
        actions,
        api,
        reducer,
    };
}
