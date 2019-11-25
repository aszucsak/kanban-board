import React from "react";
import Lane from "./Lane";
import "./SwimLanes.css";

export default function SwimLanes({ lanes, addLane }) {
  return (
    <div className="SwimLanes">
      {lanes.map(lane => (
        <Lane lane={lane} key={lane.id} />
      ))}
      <Lane
        lane={{ title: "Add lane", items: [] }}
        key="last"
        addLane={addLane}
      />
    </div>
  );
}
