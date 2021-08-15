import { useItems } from '../context/ItemsContext';
import AddItem from './AddItem';
import Item from './Item';
export default function List() {
  const { items } = useItems();

  return (
    <>
      <AddItem />
      <hr />
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))
        ) : (
          <p>There are no items to display!</p>
        )}
      </ul>
    </>
  );
}
