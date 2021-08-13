import { useState } from 'react';

export default function Item({ item, deleteItem, updateItem }) {
  const [editable, setEditable] = useState(false);
  const { id, title, completed } = item;

  return (
    <div className='d-flex center'>
      {editable ? (
        <input type='text' value={title} onChange={(e) => updateItem({ ...item, title: e.currentTarget.value })} />
      ) : (
        <p onClick={() => updateItem({ ...item, completed: !completed })} className='pointer'>
          {id} - <span className={completed ? 'completed' : ''}>{title}</span>
        </p>
      )}
      <button className={`btn btn-${editable ? 'success' : 'primary'}`} onClick={() => setEditable(!editable)}>
        {editable ? 'Save' : 'Edit'}
      </button>
      <button className='btn btn-danger' onClick={() => deleteItem(id)}>
        delete
      </button>
    </div>
  );
}
