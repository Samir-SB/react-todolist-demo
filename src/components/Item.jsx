export default function Item({item, deleteItem}) {
  return (
    <div className='d-flex center'>
      <p>{item.id} - {item.title}</p>
      <button className='btn btn-danger' onClick={() => deleteItem(item.id)}>delete</button>
    </div>
  )
}
