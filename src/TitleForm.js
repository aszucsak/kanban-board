import React, { useState } from "react";

function TitleForm({ title, editTitle, toggleEdit, laneId, addLane }) {
  const [value, setValue] = useState(title);
  const handleTitleEdit = e => {
    e.preventDefault();
    if (value !== "") {
      if (laneId) {
        editTitle(laneId, value);
      } else if (addLane) {
        addLane(value);
      } else {
        editTitle(value);
      }
      toggleEdit();
    }
    handleCancel();
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleCancel = () => {
    if (!addLane) {
      setValue(title);
    }
    toggleEdit();
  };
  return (
    <form onSubmit={handleTitleEdit}>
      <input
        type="text"
        autoFocus
        value={value}
        onBlur={handleCancel}
        onChange={handleChange}
        placeholder="Enter Title..."
      />
    </form>
  );
}

export default TitleForm;
