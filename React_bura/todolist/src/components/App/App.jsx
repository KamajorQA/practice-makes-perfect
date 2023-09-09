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
        // { label: 'Water flowers', important: true, done: false, id: '18a7a814c5601' },
        // { label: 'Plant seeds', important: false, done: false, id: '18a7a81527902' },
        // { label: 'Dig grave', important: false, done: false, id: '18a7a81595803' },
        this.createItem('Water flowers'),
        this.createItem('Plant seeds'),
        this.createItem('Dig grave'),
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
      const newTodo = this.createItem(text);

      this.setState((state) => {
        const newArray = [...state.todos, newTodo];
        return {
          todos: newArray,
        };
      });
    };

    this.toggleImportant = (id) => {
      this.setState((state) => {
        const updatedArray = this.toggleItemProperty(
          state.todos,
          id,
          'important'
        );

        return {
          todos: updatedArray,
        };
      });
    };

    this.toggleDone = (id) => {
      this.setState((state) => {
        const updatedArray = this.toggleItemProperty(state.todos, id, 'done');

        return {
          todos: updatedArray,
        };
      });
    };
  }

  // вынесена функция создания новых элементов
  // (при инициализации исходного массива и при создании новых элементов списка)
  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: (+new Date()).toString(16) + Math.floor(Math.random() * 100),
    };
  }

  // вынесена функция изменения параметров элемента ('done', 'important', etc.)
  toggleItemProperty(array, id, propName) {
    // находим индекс нужного элемента
    const idx = array.findIndex((el) => el.id === id);

    // обновляем целевой объект (путем создания копии с изменными свойствами)
    const currentItem = array[idx];
    const updatedItem = { ...currentItem, [propName]: !currentItem[propName] };

    // создаем новый массив данных с обновленным элементом
    const newArray = [
      ...array.slice(0, idx),
      updatedItem,
      ...array.slice(idx + 1),
    ];

    return newArray;
  }

  render() {
    const { todos } = this.state;
    const doneQty = todos.filter((el) => el.done === true).length;
    const toDoQty = todos.length - doneQty;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoQty} done={doneQty} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todos}
          handleDeleteItem={this.deleteItem}
          handleToggleImportant={this.toggleImportant}
          handleToggleDone={this.toggleDone}
        />

        <AddItemForm handleAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
