import React, { createContext, useContext, useReducer } from 'react';
import reducerItems from '../reducers/reducerItems';
const initialItems = [
  { id: 1, title: 'item one', completed: true },
  { id: 2, title: 'item two', completed: false },
  { id: 3, title: 'item three', completed: false },
];

const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function ItemsProvider({ children }) {
  const [items, dispatch] = useReducer(reducerItems, initialItems);
  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
}
