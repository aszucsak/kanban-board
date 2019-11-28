import React, { Fragment, useState } from "react";
import "./Lane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPlusCircle,
  // faPlusSquare,
  // faEdit,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import LaneTitleForm from "./LaneTitleForm";

function Lane({ lane, addLane, addItem, removeLane, editLaneTitle }) {
  const { title, items } = lane;
  const [isTitleEditing, toggleTitleEditing] = useState(false);

  const toggleEdit = () => toggleTitleEditing(!isTitleEditing);
  const handleClick = () => (addLane ? addLane("new lane") : null);
  const handleAddItem = e => {
    addItem(lane.id, "new item", "new description");
  };
  const handleRemoveLane = e => {
    e.stopPropagation();
    removeLane(lane.id);
  };
  const handleTitleEdit = () => {};
  const tasks = items.map(item => <span key={item.id}>{item.name}</span>);
  return (
    <div className="lane-container">
      <div className={`Lane ${addLane ? "empty" : ""}`} onClick={handleClick}>
        {isTitleEditing ? (
          <LaneTitleForm
            editLaneTitle={editLaneTitle}
            toggleEdit={toggleEdit}
            title={title}
          />
        ) : (
          <h3 onClick={toggleEdit}>
            {addLane && <FontAwesomeIcon icon={faPlusCircle} />}
            <span onClick={handleTitleEdit}>{title}</span>
            {!addLane && (
              <FontAwesomeIcon icon={faTrash} onClick={handleRemoveLane} />
            )}
          </h3>
        )}

        {!addLane && (
          <Fragment>
            {tasks}
            <span className="add-item" onClick={handleAddItem}>
              <FontAwesomeIcon icon={faPlus} />
              <span className="add-item-text">Add item</span>
            </span>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Lane;
