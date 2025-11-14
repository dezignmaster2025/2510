import PropTypes from 'prop-types';

/**
 * Requirement #1:
 * - The input is a controlled component (value comes from props.searchTerm)
 * - onChange uses props.onSearch (handler is defined in App)
 */
export default function Search({ searchTerm, onSearch, placeholder = 'Type to search…' }) {
  return (
    <div className="search">
      <label htmlFor="search-input" className="search__label">Search</label>
      <input
        id="search-input"
        type="text"
        className="search__input"
        value={searchTerm}     // controlled value from props
        onChange={onSearch}    // handler from props
        placeholder={placeholder}
        aria-label="Search items"
      />
    </div>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};