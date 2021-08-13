import { useState } from 'react'
import AddItem from './AddItem'
import Item from './Item'
export default function List() {
  const initialItems = [
    {id:1, title:'item one'},{id:2, title:'item two'} , {id: 3, title: 'item three'}]

  const [items, setItems] = useState(initialItems)

  //event handlers
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
return (
    <div>
      <AddItem />
      <hr />
      <ul>
        {items.map((item) =>
        <li key={item.id}><Item item={item} deleteItem={removeItem}/></li>
        )}
      </ul>
    </div>
  )
}
