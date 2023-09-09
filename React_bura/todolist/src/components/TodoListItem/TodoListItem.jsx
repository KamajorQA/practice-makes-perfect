import React from 'react';
import { ReactComponent as Lightning } from '../../assets/icons/Lightning.svg';
import { ReactComponent as Trash } from '../../assets/icons/Trash.svg';
import './todoListItem.css';

class TodoListItem extends React.Component {
  constructor() {
    super();

    this.state = {
      done: false,
      important: false,
    };

    this.handleLabelClick = () => {
      this.setState((state) => {
        return { done: !state.done };
      });
    };

    this.handleMarkClick = () => {
      this.setState((state) => {
        return { important: !state.important };
      });
    };
  }

  render() {
    const { label, handleDeleteItem } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (!!done) {
      classNames += ' done';
    }
    if (!!important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.handleLabelClick}>
          {label}
        </span>
        <div className="icon-group">
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={this.handleMarkClick}
          >
            <Lightning className="icon" />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={handleDeleteItem}
          >
            <Trash className="icon" />
          </button>
        </div>
      </span>
    );
  }
}

export default TodoListItem;
