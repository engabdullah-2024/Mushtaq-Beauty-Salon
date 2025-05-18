import React from 'react';
const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search Surah by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-md shadow-md focus:outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
      />
    </div>
  )
}

export default SearchBar
