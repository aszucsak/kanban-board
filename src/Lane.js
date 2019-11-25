import React, { Fragment } from "react";
import "./Lane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

function Lane({ lane }) {
  const { title, items } = lane;
  const empty = items.length === 0;
  return (
    <div className="lane-container">
      <div className={`Lane ${empty ? "empty" : ""}`}>
        <h3>
          {empty && <FontAwesomeIcon icon={faPlusCircle} />}
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
