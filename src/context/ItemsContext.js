import React, { createContext, useContext, useReducer } from 'react';
import reducerItems from '../reducers/reducerItems';
import { UseStoreData } from '../Utils/utils';

const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function ItemsProvider({ children, data }) {
  const [items, dispatch] = useReducer(reducerItems, data);
  UseStoreData(items);
  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
}
