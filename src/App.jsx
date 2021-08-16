import './App.css';
import List from './components/List';
import { ItemsProvider } from './context/ItemsContext';
import { fetchData } from './Utils/utils';

function App() {
  const data = fetchData();
  return (
    <div className='App container'>
      <h1>Todo List Demo</h1>
      <div className='card'>
        <ItemsProvider data={data}>
          <List />
        </ItemsProvider>
      </div>
    </div>
  );
}

export default App;
