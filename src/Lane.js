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

function Lane({ lane, addLane, addItem }) {
  const { title, items } = lane;
  // need to change logic -> new lane will also be empty
  // condition: new lane placeholder
  const handleClick = () => (addLane ? addLane("new lane") : null);
  const handleAddItem = e => {
    addItem(lane.id, "new item", "new description");
  };
  return (
    <div className="lane-container">
      <div className={`Lane ${addLane ? "empty" : ""}`} onClick={handleClick}>
        <h3>
          {addLane && <FontAwesomeIcon icon={faPlusCircle} />}
          <span>{title}</span>
        </h3>
        {items.map(item => (
          <span key={item.id}>{item.name}</span>
        ))}
        {!addLane && (
          <span className="add-item" onClick={handleAddItem}>
            <FontAwesomeIcon icon={faPlus} />
            <span className="add-item-text">Add item</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default Lane;
