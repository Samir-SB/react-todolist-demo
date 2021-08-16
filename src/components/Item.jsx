import { useState } from 'react';
import { useItems } from '../context/ItemsContext';

export default function Item({ item }) {
  const { dispatch } = useItems();
  const [editable, setEditable] = useState(false);
  const { id, title, completed } = item;
  const [inputValue, setInputValue] = useState(title);

  const editItem = (e) => {
    if (editable) {
      dispatch({
        type: 'updateItem',
        payload: { ...item, title: inputValue },
      });
    }
    setEditable(!editable);
  };
  const toggleCompleted = () => {
    dispatch({
      type: 'updateItem',
      payload: { ...item, completed: !completed },
    });
  };
  const removeItem = () => {
    dispatch({ type: 'removeItem', payload: id });
  };

  return (
    <div className='d-flex center'>
      {editable ? (
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <label className={`pointer ${completed ? 'completed' : ''}`}>
          <input
            type='checkbox'
            defaultChecked={completed}
            hidden={true}
            onChange={toggleCompleted}
          />
          {id} - {title}
        </label>
      )}
      <button
        className={`btn btn-${editable ? 'success' : 'primary'}`}
        onClick={editItem}
      >
        {editable ? 'Save' : 'Edit'}
      </button>
      <button className='btn btn-danger' onClick={removeItem}>
        delete
      </button>
    </div>
  );
}
