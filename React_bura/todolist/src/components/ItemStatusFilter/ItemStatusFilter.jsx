import React from 'react';
import './itemStatusFilter.css';

class ItemStatusFilter extends React.Component {
  buttonsData = [
    { buttonName: 'all', label: 'All' },
    { buttonName: 'active', label: 'Active' },
    { buttonName: 'done', label: 'Done' },
  ];

  render() {
    const { filterTag, handleChangeFilter } = this.props;

    const buttonElements = this.buttonsData.map(({ buttonName, label }) => {
      const isActive = filterTag === buttonName;
      const buttonClass = isActive
        ? 'btn-info active-button'
        : 'btn-outline-secondary';
      return (
        <button
          type="button"
          className={`btn ${buttonClass}`}
          key={buttonName}
          onClick={() => handleChangeFilter(buttonName)}
        >
          {label}
        </button>
      );
    });
    return (
      <div className="btn-group">
        {buttonElements}
        {/* <button type="button" className="btn btn-info active-button">
          All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button> */}
      </div>
    );
  }
}

export default ItemStatusFilter;
