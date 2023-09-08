import AppHeader from '../AppHeader/AppHeader.jsx';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.jsx';
import SearchPanel from '../SearchPanel/SearchPanel.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import './app.css';

const App = () => {
  const todos = [
    { label: 'Water flowers', important: true, id: 101 },
    { label: 'Plant seeds', important: false, id: 102 },
    { label: 'Dig grave', important: false, id: 103 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={2} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todos} />
    </div>
  );
};

export default App;
