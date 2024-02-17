import React, { useState } from "react";

const Input = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a meal by name..."
        className="search-input"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
