import './searchPanel.css';

const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search';

  return (
    <input
      type="text"
      placeholder={searchPlaceholder}
      className="form-control search-input"
    />
  );
};

export default SearchPanel;
