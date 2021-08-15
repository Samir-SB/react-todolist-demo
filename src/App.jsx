import './App.css';
import List from './components/List';
import { ItemsProvider } from './context/ItemsContext';
function App() {
  return (
    <div className='App container'>
      <h1>Todo List Demo</h1>
      <div className='card'>
        <ItemsProvider>
          <List />
        </ItemsProvider>
      </div>
    </div>
  );
}

export default App;
