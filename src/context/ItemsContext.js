import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducerItems from '../reducers/reducerItems';

const LOCAL_STORAGE_KEY = 'todolistDemo.items';
const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function ItemsProvider({ children }) {
  const [items, dispatch] = useReducer(reducerItems, []);
  useEffect(() => {
    const ls = localStorage.getItem(LOCAL_STORAGE_KEY);
    const payload = !!ls ? JSON.parse(ls) : [];
    dispatch({ type: 'initItems', payload });
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }, [items]);
  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
}
