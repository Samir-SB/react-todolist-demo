import { useState } from 'react';
import { useItems } from '../context/ItemsContext';

export default function AddItem() {
  const { dispatch } = useItems();
  const [title, setTitle] = useState('');

  const handleOnClick = () => {
    const payload = {
      id: Math.floor(Math.random() * 10000),
      title,
      completed: false,
    };
    dispatch({ type: 'addItem', payload });
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
