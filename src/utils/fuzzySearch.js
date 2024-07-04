import Fuse from "fuse.js";

export const fuzzySearch = (items, searchTerm) => {
  const options = {
    keys: ["name", "email", "role"],
    threshold: 0.3,
    includeScore: true, // This will include the match score in the results
  };
  const fuse = new Fuse(items, options);
  const results = fuse.search(searchTerm);

  console.log("Fuzzy search results:", results);

  return results;
};
