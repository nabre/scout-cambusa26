import { AxiosResponse } from 'axios';
import axiosClient from './axiosClient';

class ApiCrudBase<T> {
  private rootPath: string;

  constructor(rootPath: string) {
    this.rootPath = rootPath;
  }

  async fetchAll(): Promise<T[]> {
    const response: AxiosResponse<T[]> = await axiosClient.get<T[]>(this.rootPath);
    return response.data;
  }

  async create(item: Omit<T, 'id'>): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.post<T>(this.rootPath, item);
    return response.data;
  }

  async update(item: T): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.put<T>(`${this.rootPath}/${(item as { id: string }).id}`, item);
    return response.data;
  }

  async delete(id: string): Promise<string> {
    await axiosClient.delete(`${this.rootPath}/${id}`);
    return id;
  }
}

export default ApiCrudBase;