import React, { useReducer } from 'react';
import reducerItems from '../reducers/reducerItems';
import { UseStoreData } from '../Utils/utils';
import { ItemsContext } from './itemsContext';

export function ItemsProvider({ children, data }) {
  const [items, dispatch] = useReducer(reducerItems, data);

  // save the new value of items to local storage.
  UseStoreData(items);

  const updateItem = (updaatedItem) => {
    dispatch({
      type: 'updateItem',
      payload: updaatedItem,
    });
  };
  const addItem = (newItem) => {
    dispatch({
      type: 'addItem',
      payload: newItem,
    });
  };
  const removeItem = (id) => {
    dispatch({
      type: 'removeItem',
      payload: id,
    });
  };
  return (
    <ItemsContext.Provider value={{ items, addItem, updateItem, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
}
