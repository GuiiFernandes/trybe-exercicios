package com.betrybe.alexandria.util;

import com.betrybe.alexandria.models.entities.Author;
import com.betrybe.alexandria.models.entities.Book;

/**
 * The type Result.
 */
public class Result {

  Book book;
  Author author;

  public Result(Book book, Author author) {
    this.book = book;
    this.author = author;
  }

  public Book getBook() {
    return book;
  }

  public void setBook(Book book) {
    this.book = book;
  }

  public Author getAuthor() {
    return author;
  }

  public void setAuthor(Author author) {
    this.author = author;
  }
}
