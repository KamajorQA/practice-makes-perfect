const TodoList = () => {
  const todos = ['Water flowers', 'Plant seeds', 'Dig grave'];
  return (
    <ul>
      <li>{todos[0]}</li>
      <li>{todos[1]}</li>
      <li>{todos[2]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>Current Todo List</h1>;
};

const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search';
  const searchStyle = {
    fontSize: '18px',
    backgroundColor: 'bisque',
  };
  return <input placeholder={searchPlaceholder} style={searchStyle} />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

export default App;
