import React, { useEffect, useRef, useState } from "react";
import UpdateBook from "./UpdateBook";

function BookDetails({ show, book, onClose, onUpdateBook }) {
  const [editBook, setEditBook] = useState(book);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const deleteConfirmationRef = useRef(null);

  useEffect(() => {
    setEditBook(book);
  }, [book]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showDeleteConfirm &&
        deleteConfirmationRef.current &&
        !deleteConfirmationRef.current.contains(event.target)
      ) {
        setShowDeleteConfirm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDeleteConfirm]);
  if (!show) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateBook(editBook);
    setShowUpdateModal(false);
  };

  const handleEditClick = () => {
    setShowUpdateModal(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    onUpdateBook(editBook, true);
    setShowDeleteConfirm(false);
    onClose();
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <div>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img
              src={editBook.image || "./images/default.jpg"}
              alt={editBook.title}
            />
            <div className="info">
              <h1>{book.info}</h1>
              <h3>{book.author}</h3>
              <h4>
                Published at <span>{book.publishDate}</span>
              </h4>
              <p>&#8377;{book.price}</p>
              <br />
            </div>
          </div>
          <h4 className="Description">{book.description}</h4>
          <div className="editDelete">
            <button onClick={handleEditClick} className="edit">
              Edit
            </button>
            <button onClick={handleDeleteClick} className="delete">
              Delete
            </button>
          </div>
        </div>
        {showUpdateModal && (
          <UpdateBook
            book={editBook}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCloseUpdate={() => setShowUpdateModal(false)}
          />
        )}
        {showDeleteConfirm && (
          <div ref={deleteConfirmationRef} className="delete-confirmation">
            <p style={{ marginBottom: "25px" }}>
              Are you sure you want to delete this book?
            </p>
            {/* <div className="editDelete"> */}
            <button onClick={handleConfirmDelete} className="edit">
              Yes
            </button>
            <button onClick={handleCancelDelete} className="delete">
              No
            </button>
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetails;
