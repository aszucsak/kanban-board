This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Desription

Simple React-based Trello-like kanban board. Tasks can be dragged and dropped from one list to another list or within the same list. I used react-beautiful-dnd for the drag and drop feature.

### Features

1. Navbar
   The navbar does not do anything currently. I am planning to add authentication and authorization to the project. Backend will be made in a simple Node server with MongoDB or in Firebase.

2. Board
   Currently there is only one Board and new board cannot be added. I am planning to add this feature. Boards will be selectable from the navbar. The boad name can be changed by clicking the title. The title text is replaced with and input field. The form can be submitted by hitting enter. When the input field loses focus (when clicking away or hitting tab) the title update is cancelled and the original text is restored.

3. Lanes
   Lanes can be renamed, deleted and created. Renaming happens with the same form component as the one used for board title and the new lane form.

4. Tasks
   Task are rendered from the Lane component. By clicking an individual task, a modal appears where the name and details of the task appears. You can modify or delete the task from this modal.
   When one of the fields is empty, the save button is disabled. The Modal can be closed by clicking outside of the modal or by hitting cancel.
   The task can be moved to the end of another lane by selecting the lane name in the dropdown list.
   Tasks can be moved using the drag and drop feature. You can drag them to another position in the same list or you can drag them to another lane.

### General Info

I used functional components and hooks. State management is solved in the individual components. Currently no useContext hooks or Redux is used in this project. I am planning to add Redux.
The project was fully designed by me. I looked at the Trello website for inspiration but I did not copy any of the styles or specific structure.
The background is from [SVGbackgrounds.com](https://www.svgbackgrounds.com).
Icons are from FontAwesome. Imported as an NPM module.
