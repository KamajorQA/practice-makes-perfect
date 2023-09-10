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
        this.createItem('Water flowers'),
        this.createItem('Plant seeds'),
        this.createItem('Dig grave'),
      ],
      searchQuery: '',
      filterTag: 'all', // active, all, done
    };

    this.deleteItem = (id) => {
      this.setState((state) => {
        return {
          todos: state.todos.filter((el) => el.id !== id),
        };
      });
    };

    this.addItem = (text) => {
      // проверка наличия введенного текста для предотвращения создания пустых todo's
      if (text.length === 0) {
        console.warn('Enter Todo text first!');
        return 0;
      }

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

    this.handleSearchQuery = (searchText) => {
      this.setState((state) => {
        return {
          searchQuery: searchText,
        };
      });
    };

    this.changeFilter = (filterTag) => {
      this.setState({ filterTag });
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

  // функция поиска элементов в массиве по введенной строке
  searchItems(array, srchQry) {
    const normalizedSrchQry = srchQry.toLowerCase();

    return array.filter((el) =>
      el.label.toLowerCase().includes(normalizedSrchQry)
    );

    // альтернативный вариант фильтрации с проверкой подстроки через indexOf
    // return array.filter((item) => {
    //   if (normalizedSrchQry.length === 0) {
    //     return array;
    //   }
    //   return item.label.toLowerCase().indexOf(normalizedSrchQry) > -1;
    // });
  }

  // функция фильтрации по заданным параметрам
  filterItems(array, filterTag) {
    switch (filterTag) {
      case 'all': {
        return array;
      }

      case 'active': {
        return array.filter((el) => !el.done);
      }

      case 'done': {
        return array.filter((el) => el.done);
      }

      default:
        return array;
    }
  }

  render() {
    const { todos, searchQuery, filterTag } = this.state;

    // сперва над входным массивом данных проходит поиск значений по подстроке в функции searchItems
    const todosArrayAfterSearch = this.searchItems(todos, searchQuery);
    // а затем в отфильтрованном массиве происходит вторая фильтрация по заданным фильтрам в функции filterItems
    const visibleItems = this.filterItems(todosArrayAfterSearch, filterTag);

    // подсчет выполненных/оставшихся todo
    const doneQty = todos.filter((el) => el.done === true).length;
    const toDoQty = todos.length - doneQty;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoQty} done={doneQty} />

        <div className="top-panel d-flex">
          <SearchPanel handleSearchQuery={this.handleSearchQuery} />
          <ItemStatusFilter
            filterTag={filterTag}
            handleChangeFilter={this.changeFilter}
          />
        </div>

        <TodoList
          todos={visibleItems}
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
