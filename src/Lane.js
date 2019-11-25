import React from "react";
import "./Lane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPlusCircle
  // faPlusSquare,
  // faEdit,
  // faTrash
} from "@fortawesome/free-solid-svg-icons";

function Lane({ lane, addLane }) {
  const { title, items } = lane;
  const empty = items.length === 0;
  // need to change logic -> new lane will also be empty
  // condition: new lane placeholder
  const handleClick = () => addLane("new lane");
  return (
    <div className="lane-container">
      <div className={`Lane ${empty ? "empty" : ""}`}>
        <h3>
          {empty && (
            <FontAwesomeIcon icon={faPlusCircle} onClick={handleClick} />
          )}
          <span>{title}</span>
        </h3>
        {items.map(item => (
          <span key={item.id}>{item.name}</span>
        ))}
        {!empty && (
          <span className="add-item">
            <FontAwesomeIcon icon={faPlus} />
            <span className="add-item-text">Add item</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default Lane;
