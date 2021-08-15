import { useState } from 'react';
import { useItems } from '../context/ItemsContext';

export default function Item({ item }) {
  const { updateItem, removeItem } = useItems();
  const [editable, setEditable] = useState(false);
  const { id, title, completed } = item;

  return (
    <div className='d-flex center'>
      {editable ? (
        <input type='text' value={title} onChange={(e) => updateItem({ ...item, title: e.target.value })} />
      ) : (
        <label className={`pointer ${completed ? 'completed' : ''}`}>
          <input
            type='checkbox'
            defaultChecked={completed}
            hidden={true}
            onChange={() => updateItem({ ...item, completed: !completed })}
          />
          {id} - {title}
        </label>
      )}
      <button className={`btn btn-${editable ? 'success' : 'primary'}`} onClick={() => setEditable(!editable)}>
        {editable ? 'Save' : 'Edit'}
      </button>
      <button className='btn btn-danger' onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
}
