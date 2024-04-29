// BookList.js

import React, { useEffect, useState } from "react";
import BookDetails from "./BookDetails";
import { getBooks } from "../Data/BookData";

function BookList({ searchTerm, booksVersion }) {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    refreshBooks();
  }, [searchTerm, booksVersion]);

  const refreshBooks = () => {
    const allBooks = getBooks();
    const filteredBooks = searchTerm
      ? allBooks.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allBooks;
    setBooks(filteredBooks);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowDetails(true);
  };

  const handleUpdateBook = (updatedBook, isDelete = false) => {
    if (isDelete) {
      setBooks(books.filter((book) => book.id !== updatedBook.id));
    } else {
      const updatedBooks = books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      );
      setBooks(updatedBooks);
    }
    setShowDetails(false);
  };

  return (
    <>
      {books.map((book, index) => (
        <div key={index} className="card" onClick={() => handleBookClick(book)}>
          <img src={book.image} alt="Book Cover" />
          <div className="bottom">
            <h3 className="title">{book.title}</h3>
            <p className="amount">&#8377;{book.price}</p>
          </div>
        </div>
      ))}
      {selectedBook && (
        <BookDetails
          show={showDetails}
          book={selectedBook}
          onClose={() => setShowDetails(false)}
          onUpdateBook={handleUpdateBook}
        />
      )}
    </>
  );
}

export default BookList;
