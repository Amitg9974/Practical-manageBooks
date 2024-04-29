import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import AddBook from "./AddBook";
import BookForm from "./BookForm";
import { initializeBooks, addBookToStorage } from "../Data/BookData";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddBook, setShowAddBook] = useState(false);
  const [booksVersion, setBooksVersion] = useState(0);

  useEffect(() => {
    initializeBooks();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddBook = (newBook) => {
    addBookToStorage(newBook);
    setShowAddBook(false);
    setBooksVersion((current) => current + 1);
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul.
          </h1>
        </div>

        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">
        <BookList searchTerm={searchTerm} booksVersion={booksVersion} />
        <BookList searchTerm={searchTerm} booksVersion={booksVersion} />
        <AddBook onAddBookClick={() => setShowAddBook(true)} />
        {showAddBook && (
          <BookForm
            onAddBook={handleAddBook}
            onClose={() => setShowAddBook(false)}
          />
        )}
      </div>
    </>
  );
}

export default Main;
