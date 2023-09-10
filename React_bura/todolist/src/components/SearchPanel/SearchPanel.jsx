import React from 'react';
import './searchPanel.css';

class SearchPanel extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: '',
    };

    this.handleInputChange = (e) => {
      const currentSrchValue = e.target.value;
      this.setState((state) => {
        return {
          searchQuery: currentSrchValue,
        };
      });
      this.props.handleSearchQuery(currentSrchValue);
    };
  }

  render() {
    const { searchQuery } = this.state;
    const searchPlaceholder = 'Type here to search';
    return (
      <input
        type="text"
        placeholder={searchPlaceholder}
        className="form-control search-input"
        // defaultValue={123 + 37}
        value={searchQuery}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default SearchPanel;
