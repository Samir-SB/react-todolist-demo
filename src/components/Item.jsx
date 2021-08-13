export default function Item({ item, deleteItem, updateItem }) {
  const { id, title, completed } = item;

  return (
    <div className='d-flex center'>
      <p onClick={() => updateItem({ ...item, completed: !completed })} className='pointer'>
        {id} - <span className={completed ? 'completed' : ''}>{title}</span>
      </p>
      <button className='btn btn-danger' onClick={() => deleteItem(id)}>
        delete
      </button>
    </div>
  );
}
