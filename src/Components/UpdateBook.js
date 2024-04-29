import React from "react";

function UpdateBook({ book, onChange, onSubmit, onCloseUpdate }) {
  return (
    <div className="overlay">
      <div className="overlay-inner">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Update Page
        </h1>
        <form onSubmit={onSubmit}>
          <div className="update-info">
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={book.title}
                onChange={onChange}
                size={book.title.length || 1}
              />
            </div>
            <div>
              <label>Info:</label>
              <textarea
                name="info"
                value={book.info}
                onChange={onChange}
                className="dynamic-input"
              />
            </div>
            <div>
              <label>Author:</label>
              <input
                type="text"
                name="author"
                value={book.author}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Publish Date:</label>
              <input
                type="date"
                name="publishDate"
                value={book.publishDate}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                type="text"
                name="price"
                value={book.price}
                onChange={onChange}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={book.description}
                onChange={onChange}
                // style={{ fontSize: "15px", marginLeft: "15px" }}
              />
            </div>
            <div className="editDelete">
              <button type="submit" className="edit">
                Update
              </button>
              <button className="delete" onClick={onCloseUpdate}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;
