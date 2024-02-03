/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ onToggle }) => {
  const [isCelsius, setIsCelsius] = useState(false);

  const handleToggle = () => {
    const newUnit = !isCelsius ? "imperial" : "metric";
    setIsCelsius(!isCelsius);
    console.log(newUnit);
    onToggle(newUnit);
  };

  return (
    <div className="toggleButton">
      <div className="toggle-container">
        <p>Celsius</p>
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={isCelsius}
          onChange={handleToggle}
        />
        <p>Fahrenheit</p>
      </div>
    </div>
  );
};

export default ToggleButton;
