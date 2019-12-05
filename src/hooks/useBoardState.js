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
      const updatedLanes = lanes.map(lane => {
        if (lane.id === newLaneId) {
          const newItems = [...lane.items, itemToMove];
          return { ...lane, items: newItems };
        }
        if (lane.id === laneId) {
          return { ...lane, items: lane.items.filter(i => i.id !== itemId) };
        }
        return lane;
      });
      updateLanes(updatedLanes);
    },
    moveItemToPos: (sourceLaneId, destLaneId, destItemIndex, itemId) => {
      const sourceColumn = lanes.find(lane => lane.id === sourceLaneId);
      const sourceColumnIdx = lanes.findIndex(lane => lane.id === sourceLaneId);

      const destinationColumn = lanes.find(lane => lane.id === destLaneId);
      const destinationColumnIdx = lanes.findIndex(
        lane => lane.id === destLaneId
      );
      const updatedLanes = lanes;
      const movedItem = sourceColumn.items.find(item => item.id === itemId);

      if (sourceLaneId === destLaneId) {
        const destCol = {
          ...destinationColumn,
          items: destinationColumn.items.filter(i => i.id !== itemId)
        };
        const updatedLane = {
          ...destCol,
          items: [
            ...destCol.items.slice(0, destItemIndex),
            movedItem,
            ...destCol.items.slice(destItemIndex)
          ]
        };
        updatedLanes[destinationColumnIdx] = updatedLane;
      } else {
        const newSourceCol = {
          ...sourceColumn,
          items: sourceColumn.items.filter(item => item.id !== itemId)
        };

        const newDestCol = {
          ...destinationColumn,
          items: [
            ...destinationColumn.items.slice(0, destItemIndex),
            movedItem,
            ...destinationColumn.items.slice(destItemIndex)
          ]
        };
        updatedLanes[sourceColumnIdx] = newSourceCol;
        updatedLanes[destinationColumnIdx] = newDestCol;
      }

      updateLanes(updatedLanes);
    }
  };
};
