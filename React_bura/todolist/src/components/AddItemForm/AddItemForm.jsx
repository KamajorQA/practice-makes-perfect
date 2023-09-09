import React from 'react';

import './addItemForm.css';

class AddItemForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { handleAddItem } = this.props;

    return (
      <form className="add-item-form">
        <input type="text" className="form form-control"></input>
        <button
          type="button"
          className="btn btn-info active-button"
          onClick={() => handleAddItem('Hello world!')}
        >
          Add Todo
        </button>
      </form>
    );
  }
}

export default AddItemForm;
