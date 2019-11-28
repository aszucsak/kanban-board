import React, { useState } from "react";
import "./Board.css";
import SwimLanes from "./SwimLanes";
import useBoardState from "./hooks/useBoardState";
import BoardTitleForm from "./BoardTitleForm";

export default function Board() {
  const [isEditing, setIsEditing] = useState(false);
  // rewritten using useBoardState hook
  const {
    kanban,
    addLane,
    addItem,
    removeLane,
    editBoardName,
    editLaneTitle
  } = useBoardState();
  const { title, lanes } = kanban;
  const toggleEdit = () => setIsEditing(!isEditing);
  return (
    <div className="Board">
      <div className="board-title">
        {isEditing ? (
          <BoardTitleForm
            editBoardName={editBoardName}
            toggleEdit={toggleEdit}
            title={title}
          />
        ) : (
          <h1 onClick={toggleEdit}>{title}</h1>
        )}
      </div>
      <SwimLanes
        lanes={lanes}
        addLane={addLane}
        addItem={addItem}
        editLaneTitle={editLaneTitle}
        removeLane={removeLane}
      />
    </div>
  );
}
