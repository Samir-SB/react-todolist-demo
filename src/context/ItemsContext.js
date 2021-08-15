import React, { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();
const initialItems = [
  { id: 1, title: 'item one', completed: true },
  { id: 2, title: 'item two', completed: false },
  { id: 3, title: 'item three', completed: false },
];

export function useItems() {
  return useContext(ItemsContext);
}

export function ItemsProvider({ children }) {
  const [items, setItems] = useState(initialItems);

  //event handlers
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (newItem) => {
    setItems(items.map((item) => (item.id !== newItem.id ? item : newItem)));
  };
  const addItem = (item) => {
    setItems([...items, item]);
  };

  return <ItemsContext.Provider value={{ items, removeItem, updateItem, addItem }}>{children}</ItemsContext.Provider>;
}
