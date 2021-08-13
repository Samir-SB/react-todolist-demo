import { useState } from 'react'
import AddItem from './AddItem'
import Item from './Item'
export default function List() {
  const initialItems = [
    {id:1, title:'item one'},{id:2, title:'item two'} , {id: 3, title: 'item three'}]

  const [items, setItems] = useState(initialItems)
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
