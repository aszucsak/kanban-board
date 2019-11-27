import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function BoardTitleForm({ title, editBoardName, toggleEdit }) {
  const [value, setValue] = useState(title);
  const handleTitleEdit = e => {
    e.preventDefault();
    editBoardName(value);
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
    <form id="BoardTitleForm" onSubmit={handleTitleEdit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleCancel}
        value={value}
        autoFocus
      />
      <button type="submit">
        <FontAwesomeIcon icon={faCheck} size="2x" />
      </button>
    </form>
  );
}

export default BoardTitleForm;
