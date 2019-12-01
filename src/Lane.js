import React, { useState, Fragment } from "react";
import "./Lane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import TitleForm from "./TitleForm";
import ItemDetails from "./ItemDetails";

function Lane({ lanes, lane, addItem, removeLane, editLaneTitle }) {
  const { title, items } = lane;
  const [isTitleEditing, toggleTitleEditing] = useState(false);
  const [isItemFormOpen, toggleItemFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleEdit = () => toggleTitleEditing(!isTitleEditing);
  const handleAddItem = e => {
    addItem(lane.id, "new item", "new description");
  };
  const handleRemoveLane = e => {
    e.stopPropagation();
    removeLane(lane.id);
  };
  const toggleItemDetails = item => {
    setSelectedItem(selectedItem === "" ? item : "");
    toggleItemFormOpen(!isItemFormOpen);
  };
  const tasks = items.map(item => (
    <span key={item.id} onClick={() => toggleItemDetails(item)}>
      {item.name}
    </span>
  ));

  return (
    <Fragment>
      <div className="lane-container">
        <div className="Lane">
          {isTitleEditing ? (
            <TitleForm
              editTitle={editLaneTitle}
              toggleEdit={toggleEdit}
              title={title}
              laneId={lane.id}
            />
          ) : (
            <h3 onClick={toggleEdit}>
              <span>{title}</span>
              <FontAwesomeIcon icon={faTrash} onClick={handleRemoveLane} />
            </h3>
          )}
          {tasks}
          <span className="add-item" onClick={handleAddItem}>
            <FontAwesomeIcon icon={faPlus} />
            <span className="add-item-text">Add item</span>
          </span>
        </div>
      </div>
      {isItemFormOpen && (
        <ItemDetails
          lanes={lanes}
          lane={lane}
          item={selectedItem}
          toggleItemDetails={toggleItemDetails}
        />
      )}
    </Fragment>
  );
}

export default Lane;
