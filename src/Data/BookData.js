// src/data/bookData.js

import Book from "../Models/Book";

const initialBooks = [
  new Book(
    1,
    "./images/React.jpg",
    "React JS",
    "230",
    "ReactJS by Example - Building Modern Web Applications with React",
    "Joe Morgan",
    "2016-04-21",
    "This book is an introduction to React that works from the foundations upward. Each chapter takes you a little deeper into the React ecosystem, building on your previous knowledge."
  ),
  new Book(
    2,
    "./images/DSA.jpg",
    "Introduction to Algorithms",
    "670",
    "Some books on algorithms are rigorous but incomplete; others cover masses of material but lack rigor.",
    "Thomas H Cormen",
    "2021-09-02",
    "It includes two completely new chapters, on van Emde Boas trees and multithreaded algorithms, substantial additions to the chapter on recurrence, and an appendix on matrices."
  ),
  new Book(
    3,
    "./images/CS.jpg",
    "Introduction to Cyber Security",
    "353",
    "Introduction to Cyber Security is a handy guide to the world of Cyber Security.",
    "Anand Shinde",
    "2017-01-08",
    "The book takes a dip in history to talk about the very first computer virus, and at the same time, discusses in detail about the latest cyber threats. There are around four chapters covering all the Cyber Security technologies used across the globe."
  ),
  new Book(
    4,
    "./images/Python.jpg",
    "PYTHON: PROGRAMMING",
    "120",
    "A BEGINNER’S GUIDE TO LEARN PYTHON IN 7 DAYS",
    "Ramsey Hamilton",
    "2012-05-08",
    "Python is the easiest to learn and once you have a good grounding in it, you can move on to another, more complicated language. "
  ),
  new Book(
    5,
    "./images/Oops.jpg",
    "OPPs with C++",
    "645",
    "Object-oriented programming with C++, 8th edition is here with some valuable updates.",
    "E Balagurusamy",
    "2020-08-01",
    "Objective-type questions and dry-run questions are introduced to make students exam ready. A new appendix on interview questions is for those seeking to join the industry. "
  ),
];

export const initializeBooks = () => {
  if (!localStorage.getItem("books")) {
    const booksToStore = initialBooks.map((book) => JSON.stringify(book));
    localStorage.setItem("books", JSON.stringify(booksToStore));
  }
};

export const getBooks = () => {
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return JSON.parse(storedBooks).map((bookJson) =>
      Object.assign(new Book(), JSON.parse(bookJson))
    );
  }
  return [];
};

export const addBookToStorage = (newBook) => {
  const books = getBooks();
  books.push(newBook);
  const booksToStore = books.map((book) => JSON.stringify(book));
  localStorage.setItem("books", JSON.stringify(booksToStore));
};
