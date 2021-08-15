import { useState } from 'react';
import { useItems } from '../context/ItemsContext';

export default function Item({ item }) {
  const { dispatch } = useItems();
  const [editable, setEditable] = useState(false);
  const { id, title, completed } = item;

  const updateTitle = (e) => {
    dispatch({ type: 'updateItem', payload: { ...item, title: e.target.value } });
  };
  const toggleCompleted = () => {
    dispatch({ type: 'updateItem', payload: { ...item, completed: !completed } });
  };
  const removeItem = () => {
    dispatch({ type: 'removeItem', payload: id });
  };

  return (
    <div className='d-flex center'>
      {editable ? (
        <input type='text' value={title} onChange={updateTitle} />
      ) : (
        <label className={`pointer ${completed ? 'completed' : ''}`}>
          <input type='checkbox' defaultChecked={completed} hidden={true} onChange={toggleCompleted} />
          {id} - {title}
        </label>
      )}
      <button className={`btn btn-${editable ? 'success' : 'primary'}`} onClick={() => setEditable(!editable)}>
        {editable ? 'Save' : 'Edit'}
      </button>
      <button className='btn btn-danger' onClick={removeItem}>
        delete
      </button>
    </div>
  );
}
