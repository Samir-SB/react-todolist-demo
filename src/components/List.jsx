import { useState } from 'react';
import AddItem from './AddItem';
import Item from './Item';
export default function List() {
  const initialItems = [
    { id: 1, title: 'item one', completed: true },
    { id: 2, title: 'item two', completed: false },
    { id: 3, title: 'item three', completed: false },
  ];

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

  return (
    <div>
      <AddItem addItem={addItem} />
      <hr />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} deleteItem={removeItem} updateItem={updateItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}
