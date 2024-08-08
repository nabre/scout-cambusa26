import { ActionReducerMapBuilder, Draft, PayloadAction } from '@reduxjs/toolkit';
import ApiCrudThunks from './ApiCrudThunks';
import { Identifiable, StateWithStatus } from '../types/reduxTypes';

class useApiReduce<T extends Identifiable> {
    public api: ApiCrudThunks<T>;

    constructor(path: string) {
        this.api= new ApiCrudThunks<T>(path);
    }

    extraReducers(builder: ActionReducerMapBuilder<StateWithStatus<T>>) {
        const { fetchAll, create, update, remove } = this.api;

        builder
            .addCase(fetchAll.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAll.fulfilled, (state, action: PayloadAction<T[]>) => {
                state.status = 'succeeded';
                state.data = action.payload as Draft<T>[];
            })
            .addCase(fetchAll.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch data';
            })
            .addCase(create.fulfilled, (state, action: PayloadAction<T>) => {
                state.data.push(action.payload as Draft<T>);
            })
            .addCase(update.fulfilled, (state, action: PayloadAction<T>) => {
                const index = state.data.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.data[index] = action.payload as Draft<T>;
                }
            })
            .addCase(remove.fulfilled , (state, action: PayloadAction<string>) => {
                state.data = state.data.filter(item => item.id !== action.payload);
            });
    }
}

export default useApiReduce;