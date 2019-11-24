import React from "react";
import "./Lane.css";

function Lane({ lane }) {
  const { title, items } = lane;
  const empty = items.length === 0;
  return (
    <div className="lane-container">
      <div className={`Lane ${empty ? "empty" : ""}`}>
        <h3>{title}</h3>
        {items.map(item => (
          <span>{item.name}</span>
        ))}
        {!empty && <span className="add-item">Add item</span>}
      </div>
    </div>
  );
}

export default Lane;
