export default function Item({item}) {
  return (
    <div className='d-flex center'>
      <p>{item.id} - {item.title}</p>
    </div>
  )
}
