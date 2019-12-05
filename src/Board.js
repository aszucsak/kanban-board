import React, { useState } from "react";
import "./Board.css";
import SwimLanes from "./SwimLanes";
import useBoardState from "./hooks/useBoardState";
import TitleForm from "./TitleForm";
import { DragDropContext } from "react-beautiful-dnd";

export default function Board() {
  const [isEditing, setIsEditing] = useState(false);
  const {
    kanban,
    addLane,
    addItem,
    editItem,
    removeItem,
    removeLane,
    editBoardName,
    editLane,
    moveItem,
    moveItemToPos
  } = useBoardState();
  const { title, lanes } = kanban;
  const toggleEdit = () => setIsEditing(!isEditing);
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    moveItemToPos(
      source.droppableId,
      destination.droppableId,
      destination.index,
      draggableId
    );
  };
  return (
    <div className="Board">
      <div className="board-title">
        {isEditing ? (
          <TitleForm
            editTitle={editBoardName}
            toggleEdit={toggleEdit}
            title={title}
          />
        ) : (
          <h1 onClick={toggleEdit}>{title}</h1>
        )}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <SwimLanes
          lanes={lanes}
          addLane={addLane}
          addItem={addItem}
          editLane={editLane}
          removeLane={removeLane}
          editItem={editItem}
          removeItem={removeItem}
          moveItem={moveItem}
        />
      </DragDropContext>
    </div>
  );
}
