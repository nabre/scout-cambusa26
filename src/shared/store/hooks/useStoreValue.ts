// src/hooks/useStoreValue.ts

import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Funzione helper per accedere a proprietà nidificate usando una stringa puntata
const getNestedValue = (obj: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

// Hook personalizzato
export function useStoreValue<T = any>(path: string): T {
  return useSelector((state: RootState) => getNestedValue(state, path));
}