import { useState } from "react";
import { useLocation } from "wouter";
import './styles.css';

function SearchGifs() {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation()

    const handleSubmit = (event) => {
      event.preventDefault(); // don't reload page
      pushLocation(`/search/${keyword}`)
    }

    const handleChange = (event) => {
      setKeyword(event.target.value)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>GIF's searcher: </label>
        <br />
        <div className="searcher">
          <input 
            type="text" 
            value={keyword}
            placeholder="Search a gif here ..."
            onChange={handleChange}
          />
          <button>Search</button>
        </div>
      </form>
    )
}

export default SearchGifs;
