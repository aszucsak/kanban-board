import { useState } from "react";
import uuid from "../utils/uuid";
import { board } from "../seed";

export default () => {
  const [kanban, setKanban] = useState(board);
  const updateLanes = updatedLanes =>
    setKanban({ ...kanban, lanes: updatedLanes });
  const { lanes } = kanban;
  return {
    kanban,
    editBoardName: title => setKanban({ ...kanban, title }),
    addLane: newTitle => {
      const updatedLanes = [
        ...lanes,
        { id: uuid(), title: newTitle, items: [] }
      ];
      updateLanes(updatedLanes);
    },
    removeLane: laneId => {
      const updatedLanes = lanes.filter(lane => lane.id !== laneId);
      updateLanes(updatedLanes);
    },
    editLane: (laneId, newAttribute) => {
      const updatedLanes = lanes.map(lane =>
        lane.id === laneId ? { ...lane, ...newAttribute } : lane
      );
      updateLanes(updatedLanes);
    },
    addItem: (laneId, itemName, itemDescription) => {
      const newItem = {
        id: uuid(),
        name: itemName,
        description: itemDescription
      };
      const updatedLanes = lanes.map(lane =>
        lane.id === laneId ? { ...lane, items: [...lane.items, newItem] } : lane
      );
      updateLanes(updatedLanes);
    },
    editItem: (laneId, itemId, newAttribute) => {
      const oldLane = lanes.find(lane => lane.id === laneId);
      const oldItem = oldLane.items.find(item => item.id === itemId);
      const newItem = { ...oldItem, ...newAttribute };
      const filteredItems = oldLane.items.filter(item => item.id !== itemId);
      const newItems = [...filteredItems, newItem];
      const updatedLanes = lanes.map(lane => {
        if (lane.id === laneId) {
          return { ...oldLane, items: newItems };
        }
        return lane;
      });
      updateLanes(updatedLanes);
    },
    removeItem: (laneId, itemId) => {
      const updatedLanes = lanes.map(lane => {
        if (lane.id === laneId) {
          return {
            ...lane,
            items: lane.items.filter(i => i.id !== itemId)
          };
        } else {
          return lane;
        }
      });
      updateLanes(updatedLanes);
    },
    moveItem: (laneId, itemId, newLaneId) => {
      const itemToMove = lanes
        .find(l => l.id === laneId)
        .items.find(i => i.id === itemId);
      console.log(itemToMove);
      const updatedLanes = lanes.map(lane => {
        console.log(lane.id, newLaneId, laneId);
        if (lane.id === newLaneId) {
          const newItems = [...lane.items, itemToMove];
          console.log(newItems);
          return { ...lane, items: newItems };
        }
        if (lane.id === laneId) {
          return { ...lane, items: lane.items.filter(i => i.id !== itemId) };
        }
        return lane;
      });
      console.log(updatedLanes);
      updateLanes(updatedLanes);
    }
  };
};
