import React from "react";

export default function RiskLevelSearch({ onChange, searchTerm, onClick }) {
  return (
    <div>
      <input
        onChange={onChange}
        value={searchTerm}
        type="text"
        autoFocus={true}
        placeholder="Search for a place to go!"
      />
      <button onClick={onClick}>SEARCH</button>
    </div>
  );
}
