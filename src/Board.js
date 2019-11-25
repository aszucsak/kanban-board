import React from "react";
import "./Board.css";
import SwimLanes from "./SwimLanes";
import useBoardState from "./hooks/useBoardState";

export default function Board() {
  // to be rewritten using useBoardState hook
  const { kanban, addLane } = useBoardState();
  const { title, lanes } = kanban;
  return (
    <div className="Board">
      <h1>{title}</h1>
      <SwimLanes lanes={lanes} addLane={addLane} />
    </div>
  );
}
