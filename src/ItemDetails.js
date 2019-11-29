import React from "react";

function ItemDetails({ toggleItemDetails }) {
  return (
    <div class="item-details" onClick={toggleItemDetails}>
      <div className="item-form-container">
        <h1>This is where the Form goes</h1>
      </div>
    </div>
  );
}

export default ItemDetails;
