import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.jsx';
import SearchPanel from '../SearchPanel/SearchPanel.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import AddItemForm from '../AddItemForm/AddItemForm.jsx';
import './app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { label: 'Water flowers', important: true, id: '18a7a814c56' },
        { label: 'Plant seeds', important: false, id: '18a7a815279' },
        { label: 'Dig grave', important: false, id: '18a7a815958' },
      ],
    };

    this.deleteItem = (id) => {
      this.setState((state) => {
        return {
          todos: state.todos.filter((el) => el.id !== id),
        };
      });
    };

    this.addItem = (text) => {
      console.log('added text is : ', text);
      const newTodo = {
        label: text,
        important: false,
        id: (+new Date()).toString(16),
      };

      this.setState((state) => {
        const newArray = [...state.todos, newTodo];
        console.log(state.todos);
        return {
          todos: newArray,
        };
      });
    };
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={2} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todos} onDelete={this.deleteItem} />

        <AddItemForm handleAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
