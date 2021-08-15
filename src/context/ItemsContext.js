import React, { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();
const UpdateItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}
export function useSetItems(items) {
  return useContext(UpdateItemsContext);
}
export function ItemsProvider({ children }) {
  const initialItems = [
    { id: 1, title: 'item one', completed: true },
    { id: 2, title: 'item two', completed: false },
    { id: 3, title: 'item three', completed: false },
  ];
  const [items, setItems] = useState(initialItems);
  const updateItems = (items) => {
    setItems(items);
  };
  return (
    <ItemsContext.Provider value={items}>
      <UpdateItemsContext.Provider value={updateItems}>{children}</UpdateItemsContext.Provider>
    </ItemsContext.Provider>
  );
}
