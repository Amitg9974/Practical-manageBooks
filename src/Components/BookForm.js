import React, { useState } from "react";
import Book from "../Models/Book";

function BookForm({ onAddBook, onClose }) {
  const [bookData, setBookData] = useState({
    id: Date.now(),
    image: "",
    title: "",
    price: "",
    info: "",
    author: "",
    publishDate: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = new Book(...Object.values(bookData));
    onAddBook(newBook);
  };

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-16px",
          }}
        >
          Add Book Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="update-info" style={{ marginTop: "5px" }}>
            <div>
              <label>Title:</label>
              <input
                name="title"
                value={bookData.title}
                onChange={handleChange}
                placeholder="Title"
              />
            </div>
            <div>
              <label>Info:</label>
              <textarea
                name="info"
                value={bookData.info}
                onChange={handleChange}
                placeholder="Info"
              />
            </div>
            <div>
              <label>Auther:</label>
              <input
                name="author"
                value={bookData.author}
                onChange={handleChange}
                placeholder="Author"
              />
            </div>
            <div>
              <label>Price:</label>
              <input
                name="price"
                value={bookData.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </div>
            <div>
              <label>Image URL:</label>
              <input
                name="image"
                value={bookData.image}
                onChange={handleChange}
                placeholder="Image URL"
              />
            </div>
            <div>
              <label>Publish Date:</label>
              <input
                type="date"
                name="publishDate"
                value={bookData.publishDate}
                onChange={handleChange}
                placeholder="Publish Date"
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="description"
                value={bookData.description}
                onChange={handleChange}
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="editDelete">
            <button type="submit" className="edit">
              Add_Book
            </button>
            <button onClick={onClose} className="delete">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
