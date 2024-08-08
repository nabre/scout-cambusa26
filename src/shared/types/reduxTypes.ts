export interface Identifiable {
    id: string ;
}

export interface StateWithStatus<T> {
    data: T[] ;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}