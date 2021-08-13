import AddItem from './AddItem'
import Item from './Item'
export default function List() {
  const items = [
    {id:1, title:'item one'},{id:2, title:'item two'} , {id: 3, title: 'item three'}]
return (
    <div>
      <AddItem />
      <hr />
      <ul>
        {items.map((item) =>
        <li key={item.id}><Item item={item} /></li>
        )}
      </ul>
    </div>
  )
}
