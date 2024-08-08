import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import client from './axiosClient';


class ApiEndpoints {
    private client: AxiosInstance;

    constructor() {
        this.client = client;
    }

    private async request<T>(method: string, url: string, data?: any): Promise<AxiosResponse<any>> {
        try {
            const config = {
                method,
                url,
                data,
                params: method === 'get' ? data : undefined
            };
            const response: AxiosResponse<T> = await this.client(config);
            return response;
        } catch (error) {
            this.handleError(error as AxiosError);
            throw error;
        }
    }

    async get<T>(url: string, data?: any): Promise<any> {
        return this.request<T>('get', url, data);
    }

    async post<T>(url: string, data?: any): Promise<any> {
        return this.request<T>('post', url, data);
    }

    async put<T>(url: string, data?: any): Promise<any> {
        return this.request<T>('put', url, data);
    }

    async delete<T>(url: string): Promise<any> {
        return this.request<T>('delete', url);
    }

    private handleError(error: AxiosError): void {
        console.error('API Error:', error.response?.data || error.message);
        // Implementa qui la logica per la gestione degli errori
    }
}

export default new ApiEndpoints();