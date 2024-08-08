import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiCrudBase from '../client/ApiCrudBase';

class ApiCrudThunks<T> {
    private api: ApiCrudBase<T>;
    public fetchAll: any;
    public create: any;
    public update: any;
    public remove: any;

    constructor(path: string) {
        this.api = new ApiCrudBase<T>(path);
        const entity = path.split('/').pop(); // Derivare l'entità dal percorso radice

        if (!entity) {
            throw new Error('Invalid path');
        }

        this.fetchAll = createAsyncThunk(`${entity}/fetchAll`, async () => {
            const response = await this.api.fetchAll();
            return response;
        });

        this.create = createAsyncThunk(`${entity}/create`, async (item: Omit<T, 'id'>) => {
            const response = await this.api.create(item);
            return response;
        });

        this.update = createAsyncThunk(`${entity}/update`, async (item: T) => {
            const response = await this.api.update(item);
            return response;
        });

        this.remove = createAsyncThunk(`${entity}/delete`, async (id: string) => {
            const response = await this.api.delete(id);
            return response;
        });
    }

}

export default ApiCrudThunks;