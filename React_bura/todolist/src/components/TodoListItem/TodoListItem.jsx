import React from 'react';
import { ReactComponent as Lightning } from '../../assets/icons/Lightning.svg';
import { ReactComponent as Trash } from '../../assets/icons/Trash.svg';
import './todoListItem.css';

class TodoListItem extends React.Component {
  render() {
    const { label, important = false } = this.props;

    const itemStyle = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <span className="todo-list-item ">
        <span className="todo-list-item-label" style={itemStyle}>
          {label}
        </span>
        <div className="icon-group">
          <button type="button" className="btn btn-outline-success btn-sm">
            <Lightning className="icon" />
          </button>

          <button type="button" className="btn btn-outline-danger btn-sm">
            <Trash className="icon" />
          </button>
        </div>
      </span>
    );
  }
}

export default TodoListItem;
