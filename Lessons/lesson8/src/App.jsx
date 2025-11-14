import { useMemo, useState } from 'react';
import Search from './components/Search.jsx';
import ItemList from './components/ItemList.jsx';

/**
 * BONUS sample data — you can replace with anything you like.
 */
const INITIAL_ITEMS = [
  { id: 1, name: 'Apple MacBook Air' },
  { id: 2, name: 'Samsung Galaxy S24' },
  { id: 3, name: 'Sony WH-1000XM5' },
  { id: 4, name: 'Nintendo Switch' },
  { id: 5, name: 'Logitech MX Master 3S' },
];

export default function App() {
  // Requirement #2: state that holds the current search term
  const [searchTerm, setSearchTerm] = useState('');

  // Requirement #2: update state from input change event
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Requirement #4 (Bonus): filter items using the search term (case-insensitive)
  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return INITIAL_ITEMS;
    return INITIAL_ITEMS.filter((item) =>
      item.name.toLowerCase().includes(term),
    );
  }, [searchTerm]);

  return (
    <div className="app">
      <h1 className="title">Search Assignment</h1>

      {/* Requirement #3: pass searchTerm & handler to Search */}
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      {/* Requirement #4 (Bonus): show filtered list */}
      <ItemList items={filteredItems} />

      <p className="hint">
        Try typing <code>sony</code>, <code>switch</code>, or <code>apple</code>.
      </p>
    </div>
  );
}