import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import { sampleData } from './utils/sampleData';
import { fuzzySearch } from './utils/fuzzySearch';

function App() {
  const [searchResults, setSearchResults] = useState(sampleData);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setSearchResults(sampleData);
    } else {
      const results = fuzzySearch(sampleData, query);
      setSearchResults(results.map(result => result.item));
    }
  };

  return (
    <div>
      <h1>Search Algorithm Demo</h1>
      <SearchBar onSearch={handleSearch} />
      <DataTable data={searchResults} />
    </div>
  );
}

export default App;