import { createContext, useContext } from 'react';

export const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}
