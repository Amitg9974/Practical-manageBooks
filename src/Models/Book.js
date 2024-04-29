// src/Models/Book.js

class Book {
  constructor(id, image, title, price, info, author, publishDate, description) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.price = price;
    this.info = info;
    this.author = author;
    this.publishDate = publishDate;
    this.description = description;
  }

  // describe() {
  //   return `${this.title} by ${this.author}, publishDate: ${this.publishDate}`;
  // }
}

export default Book;
