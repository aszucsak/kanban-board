export const board = {
  title: "Main Board",
  lanes: [
    {
      id: "lane-1",
      title: "To do",
      items: [
        {
          id: "task-1",
          name: "drag and drop",
          description: "implement drag and drop for tasks"
        },
        {
          id: "task-2",
          name: "add items",
          description: "implement add item function"
        },
        {
          id: "task-3",
          name: "implement add lane function",
          description: "implement add lane function"
        }
      ]
    },
    {
      id: "lane-2",
      title: "in progress",
      items: [
        { id: "task-4", name: "Seed file", description: "create seed file" },
        { id: "task-5", name: "state", description: "add state to component" }
      ]
    },
    {
      id: "lane-3",
      title: "done",
      items: [
        { id: "task-6", name: "design", description: "design board" },
        { id: "task-7", name: "navbar", description: "create navbar" }
      ]
    }
  ]
};
