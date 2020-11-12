import React, { useState } from 'react';

const SearchForm = () => {

  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(search)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="searchInput">
          <i className="fas fa-search"></i>
          <input 
            type="text" 
            style={{ width: "95.3%", marginBottom: "20px", paddingLeft: "4%" }} 
            placeholder="search"
            onChange={handleChange} 
          />
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
