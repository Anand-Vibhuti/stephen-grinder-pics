import './SearchBar.css';
import { useState } from "react";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("i need to tell the parent about some data");
    onSubmit(term);
  };
  const handleChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
