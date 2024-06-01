const SearchBar = ({ searchTerm, onInputChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Ad / Soyad / GSM nömrəsi / Kart Nömrəsi"
        value={searchTerm}
        onChange={onInputChange}
      />
      <button className="search__form-btn" onClick={onSearch}>
        Axtar
      </button>
    </div>
  );
};

export default SearchBar;
