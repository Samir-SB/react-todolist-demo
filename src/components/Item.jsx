export default function Item({item, deleteItem}) {
  const {id, title} = item;
  return (
    <div className='d-flex center'>
      <p>{id} - {title}</p>
      <button className='btn btn-danger' onClick={() => deleteItem(id)}>delete</button>
    </div>
  )
}
