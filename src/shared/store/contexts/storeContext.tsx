import React, { createContext, useState, useEffect, useContext } from 'react';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import store, { injectReducer } from '../store';

interface StoreContextType {
    store: Store,
    injectReducer: (key: string, reducer: any) => void
}


const Context = createContext<StoreContextType | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const value = {
        store,
        injectReducer
    }

    return (
        <Context.Provider value={value}>
            <Provider store={store}>{children}</Provider>
        </Context.Provider>
    );
};


export const useStoreContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useStoreContext must be used within an StoreProvider');
    }
    return context;
};