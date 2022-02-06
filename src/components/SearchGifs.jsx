import { useState } from "react";

function SearchGifs() {
    const [gifName, setGifName] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      alert("Input filled with: " + {gifName})
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={gifName}
            onChange={(e) => setGifName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    )
}

export default SearchGifs;
