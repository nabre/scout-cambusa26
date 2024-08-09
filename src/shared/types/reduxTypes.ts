export interface Identifiable {
    id: string ;
}

export interface StateWithStatus {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface DataStateWithStatus<T> extends StateWithStatus {
    data: T[] ;
}