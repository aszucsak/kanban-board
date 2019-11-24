import React from "react";
import Lane from "./Lane";
import "./SwimLanes.css";

export default function SwimLanes({ lanes }) {
  return (
    <div class="SwimLanes">
      {lanes.map(lane => (
        <Lane lane={lane} key={lane.id} />
      ))}
      <Lane lane={{ title: "Add lane", items: [] }} key="last" />
    </div>
  );
}
