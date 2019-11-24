import { useState } from "react";
import uuid from "../utils/uuid";
import { board } from "../seed";

export default initialBoard => {
  const [kanban, setKanban] = useState(board);
  const updateLanes = updatedLanes =>
    setKanban({ ...kanban, lanes: updatedLanes });
  return {
    kanban,
    addLane: newTitle => {
      setKanban({
        ...kanban,
        lanes: [
          ...kanban.lanes,
          {
            id: uuid(),
            title: newTitle,
            items: []
          }
        ]
      });
    },
    removeLane: laneId => {
      const updatedLanes = kanban.lanes.filter(lane => lane.id !== laneId);
      updateLanes(updatedLanes);
    },
    editLaneTitle: (laneId, newTitle) => {
      const updatedLanes = kanban.lanes.map(lane =>
        lane.id === laneId ? { ...lane, title: newTitle } : lane
      );
      setKanban({ ...kanban, lanes: updatedLanes });
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
