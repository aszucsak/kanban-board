import React, { useState } from "react";
import Lane from "./Lane";
import "./SwimLanes.css";
import AddLaneButton from "./AddLaneButton";
import TitleForm from "./TitleForm";

export default function SwimLanes({
  lanes,
  addLane,
  addItem,
  removeItem,
  editItem,
  removeLane,
  editLane,
  moveItem
}) {
  const [isAddTitleEditing, setIsAddTitleEditing] = useState(false);
  const toggleEdit = () => {
    setIsAddTitleEditing(!isAddTitleEditing);
  };
  return (
    <div className="SwimLanes">
      {lanes.map(lane => (
        <Lane
          lane={lane}
          key={lane.id}
          addItem={addItem}
          removeLane={removeLane}
          editLane={editLane}
          lanes={lanes}
          removeItem={removeItem}
          editItem={editItem}
          moveItem={moveItem}
        />
      ))}
      {!isAddTitleEditing ? (
        <AddLaneButton toggleEdit={toggleEdit} />
      ) : (
        <div className="lane-container">
          <div className="Lane">
            <TitleForm addLane={addLane} toggleEdit={toggleEdit} />
          </div>
        </div>
      )}
    </div>
  );
}
