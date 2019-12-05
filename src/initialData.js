const board = {
  title: "Main Board",
  lanes: {
    "lane-1": {
      id: "lane-1",
      title: "To do",
      items: ["task-1"]
    },
    "lane-2": {
      id: "lane-2",
      title: "in progress",
      items: ["task-4", "task-3"]
    },
    "lane-3": {
      id: "lane-3",
      title: "done",
      items: ["task-2", "task-5"]
    }
  },
  items: {
    "task-1": {
      id: "task-1",
      name: "drag and drop",
      description: "implement drag and drop for tasks"
    },
    "task-2": {
      id: "task-2",
      name: "add items",
      description: "implement add item function"
    },
    "task-3": {
      id: "task-3",
      name: "Seed file",
      description: "create seed file"
    },
    "task-4": {
      id: "task-4",
      name: "state",
      description: "add state to components"
    },
    "task-5": {
      id: "task-5",
      name: "navbar",
      description: "create navbar"
    }
  },
  laneOrder: ["lane-1", "lane-2", "lane-3"]
};

export default board;
