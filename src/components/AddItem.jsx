import { useState } from 'react';
import { useItems } from '../context/itemsContext';

export default function AddItem() {
  const { addItem } = useItems();
  const [title, setTitle] = useState('');

  const handleOnClick = () => {
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      title,
      completed: false,
    };
    addItem(newItem);
    setTitle('');
  };
  return (
    <div>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <button
        className='btn btn-primary'
        onClick={handleOnClick}
        disabled={!title.trim()}
      >
        Add
      </button>
    </div>
  );
}
