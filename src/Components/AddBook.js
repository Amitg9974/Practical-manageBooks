import React from "react";

function AddBook({ onAddBookClick }) {
  return (
    <div
      className="card"
      onClick={onAddBookClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer", 
      }}
    >
      <i className="fas fa-plus-circle" style={{ fontSize: "150px" }}></i>
    </div>
  );
}

export default AddBook;
