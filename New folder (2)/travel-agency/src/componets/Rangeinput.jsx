import React, { useState, useEffect } from "react";
import "./RangeSlider.css"; // Custom styles

const RangeSlider = ({ min, max, step, onChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange([minValue, maxValue]); // Call only when min or max values change
    }
  }, [minValue, maxValue]); 

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
  };

  return (
    <div className="range-slider">
      <div className="slider-track " />
      <div
        className="slider-range"
        style={{
          left: `${((minValue - min) / (max - min)) * 100}%`,
          width: `${((maxValue - minValue) / (max - min)) * 100}%`,
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        className="thumb thumb-left"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className="thumb thumb-right"
      />
      <div className="flex justify-between py-4">
                    <p>${minValue}</p>
                    <p>${maxValue}</p>
      </div>

    </div>
  );
};

export default RangeSlider;
