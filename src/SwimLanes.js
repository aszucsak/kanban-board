import React, { useState } from "react";
import Lane from "./Lane";
import "./SwimLanes.css";
import AddLaneButton from "./AddLaneButton";
import TitleForm from "./TitleForm";

export default function SwimLanes({
  lanes,
  addLane,
  addItem,
  removeLane,
  editLaneTitle
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
          editLaneTitle={editLaneTitle}
          lanes={lanes}
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
