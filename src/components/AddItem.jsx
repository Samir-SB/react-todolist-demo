import { useState } from 'react';
import { useItems } from '../context/ItemsContext';

const initialItem = {
  id: Math.floor(Math.random() * 10000),
  title: '',
  completed: false,
};
export default function AddItem() {
  const { addItem } = useItems();
  const [title, setTitle] = useState('');

  const handleOnClick = () => {
    setTitle('');
    addItem({ ...initialItem, title });
  };
  return (
    <div>
      <input type='text' value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <button className='btn btn-primary' onClick={handleOnClick} disabled={!title.trim()}>
        Add
      </button>
    </div>
  );
}
