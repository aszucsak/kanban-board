import { useState } from "react";
import uuid from "../utils/uuid";
import { board } from "../seed";

export default () => {
  const [kanban, setKanban] = useState(board);
  const updateLanes = updatedLanes =>
    setKanban({ ...kanban, lanes: updatedLanes });
  return {
    kanban,
    addLane: newTitle => {
      const updatedLanes = [
        ...kanban.lanes,
        { id: uuid(), title: newTitle, items: [] }
      ];
      updateLanes(updatedLanes);
    },
    removeLane: laneId => {
      const updatedLanes = kanban.lanes.filter(lane => lane.id !== laneId);
      updateLanes(updatedLanes);
    },
    editLaneTitle: (laneId, newTitle) => {
      const updatedLanes = kanban.lanes.map(lane =>
        lane.id === laneId ? { ...lane, title: newTitle } : lane
      );
      updateLanes(updatedLanes);
    },
    addItem: (laneId, itemName, itemDescription) => {
      const newItem = {
        id: uuid(),
        name: itemName,
        description: itemDescription
      };
      const updatedLanes = kanban.lanes.map(lane =>
        lane.Id === laneId ? { ...lane, items: [...lane.items, newItem] } : lane
      );
      updateLanes(updatedLanes);
    },
    editItem: (laneId, itemId, newAttribute) => {
      const updatedLanes = kanban.lanes.map(lane =>
        lane.id === laneId
          ? lane.items.map(item =>
              item.id === itemId ? { ...item, ...newAttribute } : item
            )
          : lane
      );
      updateLanes(updatedLanes);
    },
    removeItem: itemId => {
      const updatedLanes = kanban.lanes.map(lane =>
        lane.items.filter(item => item.id !== itemId)
      );
      updateLanes(updatedLanes);
    }
  };
};
