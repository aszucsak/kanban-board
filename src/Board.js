import React from "react";
import "./Board.css";
import SwimLanes from "./SwimLanes";
import useBoardState from "./hooks/useBoardState";

export default function Board() {
  // rewritten using useBoardState hook
  const { kanban, addLane, addItem } = useBoardState();
  const { title, lanes } = kanban;
  return (
    <div className="Board">
      <h1>{title}</h1>
      <SwimLanes lanes={lanes} addLane={addLane} addItem={addItem} />
    </div>
  );
}
