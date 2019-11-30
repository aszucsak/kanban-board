import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faFileAlt, faColumns } from "@fortawesome/free-solid-svg-icons";

function ItemDetails({ toggleItemDetails, lanes, lane, item }) {
  const handleClick = e => {
    e.stopPropagation();
  };
  return (
    <div className="item-details" onClick={toggleItemDetails}>
      <div className="item-form-container" onClick={handleClick}>
        <h3>Task details</h3>
        <form>
          <div className="label-logo">
            <FontAwesomeIcon icon={faTag} />
            <div className="label-input">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={item.name}
                placeholder="Add Title..."
                autoFocus
              />
            </div>
          </div>
          <div className="label-logo">
            <div className="label-input">
              <label htmlFor="description">
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Description</span>
              </label>
              <textarea
                id="description"
                cols="30"
                rows="3"
                placeholder="Add Description..."
              >
                {item.description}
              </textarea>
            </div>
          </div>
          <div className="label-logo">
            <FontAwesomeIcon icon={faColumns} />
            Currently in Column: {lane.title}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemDetails;
