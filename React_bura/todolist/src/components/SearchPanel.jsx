const SearchPanel = () => {
  const searchPlaceholder = 'Type here to search';
  const searchStyle = {
    fontSize: '18px',
    backgroundColor: 'bisque',
  };
  return <input placeholder={searchPlaceholder} style={searchStyle} />;
};

export default SearchPanel;
