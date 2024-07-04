import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import DataTable from "./components/DataTable";
import { sampleData } from "./utils/sampleData";
import { fuzzySearch } from "./utils/fuzzySearch";

function App() {
  const [searchResults, setSearchResults] = useState(sampleData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    setSearchTerm(query);
    if (query.trim() === "") {
      setSearchResults(sampleData);
    } else {
      const results = fuzzySearch(sampleData, query);
      setSearchResults(
        results.map((result) => ({ ...result.item, score: result.score })),
      );
    }
  };

  return (
    <div>
      <h1>Search Algorithm Demo</h1>
      <SearchBar onSearch={handleSearch} />
      <p>Current search term: {searchTerm}</p>
      <DataTable data={searchResults} />
    </div>
  );
}

export default App;
