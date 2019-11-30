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
            <span className="logo">
              <FontAwesomeIcon icon={faTag} />
            </span>
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
            <span className="logo">
              <FontAwesomeIcon icon={faFileAlt} />
            </span>
            <div className="label-input">
              <label htmlFor="description">
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
            <span className="logo">
              <FontAwesomeIcon icon={faColumns} />
            </span>
            <div>
              {/* To be modified */}
              <p>Currently in Column: {lane.title}</p>
              <p>Move to Column: </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemDetails;
