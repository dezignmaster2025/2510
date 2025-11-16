import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update the searchTerm state
  };

  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search App</h1>
      <Search onSearch={handleSearch} value={searchTerm} />
      <p>Searching for: {searchTerm}</p>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Search(props) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={props.value}
        onChange={props.onSearch}
      />
    </div>
  );
}

export default App;