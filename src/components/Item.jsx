export default function Item({ item, deleteItem, updateItem }) {
  const { id, title, completed } = item;

  //event handlers
  const handleUpdateItem = () => {
    updateItem({ ...item, completed: !completed });
  };
  return (
    <div className='d-flex center'>
      <p onClick={handleUpdateItem} className='pointer'>
        {id} - <span className={completed ? 'completed' : ''}>{title}</span>
      </p>
      <button className='btn btn-danger' onClick={() => deleteItem(id)}>
        delete
      </button>
    </div>
  );
}
