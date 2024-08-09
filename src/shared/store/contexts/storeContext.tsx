import React, { createContext, useContext } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { Store } from '@reduxjs/toolkit';

interface StoreContextType {
    store: Store;
}

const Context = createContext<StoreContextType | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const value = {
        store
    }

    return (
        <Context.Provider value={value}>
            <Provider store={store}>
                {children}
            </Provider>
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