export const board = {
  title: "Main Board",
  lanes: [
    {
      id: 1,
      title: "To do",
      items: [
        {
          id: 1,
          name: "drag and drop",
          description: "implement drag and drop for tasks"
        },
        {
          id: 2,
          name: "add items",
          description: "implement add item function"
        },
        {
          id: 3,
          name: "implement add lane function",
          description: "implement add lane function"
        }
      ]
    },
    {
      id: 2,
      title: "in progress",
      items: [
        { id: 1, name: "Seed file", description: "create seed file" },
        { id: 2, name: "state", description: "add state to component" }
      ]
    },
    {
      id: 3,
      title: "done",
      items: [
        { id: 1, name: "design", description: "design board" },
        { id: 2, name: "navbar", description: "create navbar" }
      ]
    }
  ]
};
