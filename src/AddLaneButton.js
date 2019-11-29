import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function AddLaneButton({ toggleEdit }) {
  return (
    <div className="lane-container">
      <button className="AddLaneButton Lane empty" onClick={toggleEdit}>
        <h3>
          <FontAwesomeIcon icon={faPlusCircle} />
          <span>Add Lane</span>
        </h3>
      </button>
    </div>
  );
}

export default AddLaneButton;
