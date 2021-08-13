import './App.css';
import List from './components/List';

function App() {
  return (
    <div className='App container'>
      <h1>Todo List Demo</h1>
      <div className='card'>
        <List />
      </div>
    </div>
  );
}

export default App;
