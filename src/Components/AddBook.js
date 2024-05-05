import React from "react";

// Here is add book logic
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
