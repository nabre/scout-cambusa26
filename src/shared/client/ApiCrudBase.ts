import { AxiosResponse } from 'axios';
import client from './apiEndpoint';

class ApiCrudBase<T> {
  private rootPath: string;

  constructor(rootPath: string) {
    this.rootPath = rootPath;
  }

  async fetchAll(): Promise<T[]> {
    const response: AxiosResponse<T[]> = await client.get<T[]>(this.rootPath);
    return response.data;
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    const response: AxiosResponse<T> = await client.post<T>(this.rootPath, item);
    return response.data;
  }

  async update(item: T): Promise<T> {
    const response: AxiosResponse<T> = await client.put<T>(`${this.rootPath}/${(item as { id: string }).id}`, item);
    return response.data;
  }

  async delete(id: string): Promise<string> {
    await client.delete(`${this.rootPath}/${id}`);
    return id;
  }
}

export default ApiCrudBase;