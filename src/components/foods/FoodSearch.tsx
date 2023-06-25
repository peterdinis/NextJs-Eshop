import React, { useState } from 'react';

const FoodSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
      className="p-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-400"
    />
  </form>
  );
};

export default FoodSearch;