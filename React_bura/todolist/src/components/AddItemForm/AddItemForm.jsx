import React from 'react';

import './addItemForm.css';

class AddItemForm extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };

    this.handleNewTodoInput = (event) => {
      event.preventDefault();

      this.setState((state) => {
        return {
          inputValue: event.target.value,
        };
      });
    };

    this.handleFormSubmit = (event) => {
      event.preventDefault();

      this.props.handleAddItem(this.state.inputValue);

      this.setState((state) => {
        return {
          inputValue: '',
        };
      });
    };
  }

  render() {
    return (
      <form className="add-item-form" onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          className="form form-control"
          onChange={this.handleNewTodoInput}
          placeholder="To be done"
          value={this.state.inputValue}
        ></input>
        <button type="submit" className="btn btn-info active-button">
          Add Todo
        </button>
      </form>
    );
  }
}

export default AddItemForm;
