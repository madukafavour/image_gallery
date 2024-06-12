import { useState } from "react";
import searchIcon from './search (1).svg';

export default function SearchBar({ setTerm }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setTerm(searchTerm);
    // setSearchTerm('')
  };
  return (
    <div className="searchfixed">
      <div className="header">
        <div className="logo">
          <h4>FAYVIN</h4>
        </div>
        <div className="title">
          <h1>Image Gallery</h1>
        </div>
        <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search images e.g cat"
            value={searchTerm}
            onChange={handleSubmit}
          />
          <button className="search-lg" type="submit">Search</button>
          <button className="search-md" type="submit">
            <img src={searchIcon} alt="search" />
          </button>
        </form>
      </div>
    </div>
  );
}
