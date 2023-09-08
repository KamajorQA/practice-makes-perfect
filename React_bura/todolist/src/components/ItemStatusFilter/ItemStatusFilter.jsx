import React from 'react';
import './itemStatusFilter.css';

class ItemStatusFilter extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-info active-button">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>
      </div>
    );
  }
}

export default ItemStatusFilter;
