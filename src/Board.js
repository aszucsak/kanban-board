import React, { useState } from "react";
import "./Board.css";
import SwimLanes from "./SwimLanes";
import { board } from "./seed";

export default function Board() {
  const [kanbanBoard, setBoard] = useState(board);
  const { title, lanes } = kanbanBoard;
  return (
    <div className="Board">
      <h1>{title}</h1>
      <SwimLanes lanes={lanes} />
    </div>
  );
}
