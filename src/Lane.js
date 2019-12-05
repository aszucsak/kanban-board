import React, { useState, Fragment } from "react";
import "./Lane.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import TitleForm from "./TitleForm";
import ItemDetails from "./ItemDetails";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Lane({
  lanes,
  lane,
  addItem,
  removeItem,
  editItem,
  removeLane,
  editLane,
  moveItem
}) {
  const { title, items } = lane;
  const [isTitleEditing, toggleTitleEditing] = useState(false);
  const [isItemFormOpen, toggleItemFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleEdit = () => toggleTitleEditing(!isTitleEditing);
  const handleAddItem = e => {
    toggleItemDetails({ name: "", description: "" });
  };
  const handleRemoveLane = e => {
    e.stopPropagation();
    removeLane(lane.id);
  };
  const toggleItemDetails = item => {
    setSelectedItem(selectedItem === "" ? item : "");
    toggleItemFormOpen(!isItemFormOpen);
  };
  const tasks = items.map((item, index) => (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {provided => (
        <div
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span key={item.id} onClick={() => toggleItemDetails(item)}>
            {item.name}
          </span>
        </div>
      )}
    </Draggable>
  ));

  return (
    <Fragment>
      <div className="lane-container">
        <div className="Lane">
          {isTitleEditing ? (
            <TitleForm
              editLane={editLane}
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
          <Droppable droppableId={lane.id}>
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <span className="add-item task" onClick={handleAddItem}>
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
          removeItem={removeItem}
          editItem={editItem}
          addItem={addItem}
          moveItem={moveItem}
        />
      )}
    </Fragment>
  );
}

export default Lane;
