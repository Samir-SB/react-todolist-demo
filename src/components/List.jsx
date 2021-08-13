import AddItem from './AddItem'
import Item from './Item'
export default function List() {
  const items = ['item one', 'item two', 'item three']

return (
    <div>
      <AddItem />
      <hr />
      <ul>
        {items.map((item, index) =>
        <li key={index}><Item item={item}/></li>
        )}
      </ul>
    </div>
  )
}
