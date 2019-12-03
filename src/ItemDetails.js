import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFileAlt,
  faColumns,
  faCheckSquare
} from "@fortawesome/free-solid-svg-icons";

function ItemDetails({
  toggleItemDetails,
  lanes,
  lane,
  item,
  addItem,
  removeItem,
  editItem,
  moveItem
}) {
  const handleClick = e => {
    e.stopPropagation();
  };
  const [value, setValue] = useState({
    itemName: item.name,
    itemDescription: item.description,
    laneId: lane.id
  });
  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]:
        e.target.name === "laneId" ? +e.target.value : e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    editItem(lane.id, item.id, {
      name: value.itemName,
      description: value.itemDescription
    });
    if (value.laneId !== lane.id) {
      moveItem(lane.id, item.id, value.laneId);
    }
    toggleItemDetails();
  };
  const handleRemove = () => {
    removeItem(lane.id, item.id);
    toggleItemDetails();
  };
  return (
    <div className="item-details" onClick={toggleItemDetails}>
      <div className="item-form-container" onClick={handleClick}>
        <h3>Task details</h3>
        <form onSubmit={handleSubmit}>
          <div className="label-logo">
            <span className="logo">
              <FontAwesomeIcon icon={faTag} />
            </span>
            <div className="label-input">
              <label htmlFor="itemName">Title</label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={value.itemName}
                placeholder="Add Title..."
                autoFocus
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="label-logo">
            <span className="logo">
              <FontAwesomeIcon icon={faFileAlt} />
            </span>
            <div className="label-input">
              <label htmlFor="itemDescription">
                <span>Description</span>
              </label>
              <textarea
                id="itemDescription"
                cols="30"
                rows="3"
                name="itemDescription"
                placeholder="Add Description..."
                onChange={handleChange}
                value={value.itemDescription}
              ></textarea>
            </div>
          </div>
          <div className="label-logo">
            <span className="logo">
              <FontAwesomeIcon icon={faColumns} />
            </span>
            <div className="label-input">
              <p>
                Currently in Column:{" "}
                <span className="current-lane">{lane.title}</span>
              </p>
              <p>Move to Column: </p>
              <p>
                <select
                  name="laneId"
                  id="laneTitle"
                  value={value.laneId}
                  onChange={handleChange}
                >
                  {lanes.map(l => (
                    <option key={l.id} value={l.id}>
                      {l.title}
                    </option>
                  ))}
                </select>
              </p>
            </div>
          </div>
          <div className="label-logo">
            <span className="logo">
              <FontAwesomeIcon icon={faCheckSquare} />
            </span>
            <div className="buttons">
              <input type="submit" value="Save values" />
              <input type="button" value="Cancel" onClick={toggleItemDetails} />
              <input
                type="button"
                className="delete-button"
                value="Delete"
                onClick={handleRemove}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemDetails;
