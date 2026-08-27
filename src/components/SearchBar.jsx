const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      SearchBar
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Jobs..."
      />
    </div>
  );
};

export default SearchBar;
