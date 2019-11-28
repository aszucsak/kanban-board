import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function LaneTitleForm({ title, editLaneTitle, toggleEdit }) {
  const [value, setValue] = useState(title);
  const handleTitleEdit = e => {
    e.preventDefault();
    editLaneTitle(value);
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
    <form id="lane-title-form" onSubmit={handleTitleEdit}>
      <input
        type="text"
        autoFocus
        value={value}
        onBlur={handleCancel}
        onChange={handleChange}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faCheck} size="2x" />
      </button>
    </form>
  );
}

export default LaneTitleForm;
