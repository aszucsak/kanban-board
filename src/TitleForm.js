import React, { useState } from "react";

function TitleForm({ title, editTitle, toggleEdit, laneId }) {
  const [value, setValue] = useState(title);
  const handleTitleEdit = e => {
    e.preventDefault();
    if (laneId) {
      editTitle(laneId, value);
    } else {
      editTitle(value);
    }
    toggleEdit();
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  const handleCancel = () => {
    setValue(title);
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
      />
    </form>
  );
}

export default TitleForm;
