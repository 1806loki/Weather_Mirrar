/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onPlaceChange }) => {
  const [place, setPlace] = useState("Bengaluru");
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (place.trim() === "") {
      setError(true);
    } else {
      setError(false);
      onPlaceChange(place);
    }
  };

  const handleInputChange = (e) => {
    const newPlace = e.target.value;
    setPlace(newPlace);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    onPlaceChange(place);
  }, [onPlaceChange]);

  return (
    <div className="searchBar">
      <div className="container">
        <input
          type="text"
          name="place"
          id="place"
          placeholder="Enter the Place"
          value={place}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          aria-label="Enter the Place"
          autoCorrect="false"
        />
        <button className="enter" onClick={handleSearch}>
          Enter
        </button>
      </div>
      {error ? <p className="error">Please enter a valid name</p> : ""}
    </div>
  );
};

export default SearchBar;
