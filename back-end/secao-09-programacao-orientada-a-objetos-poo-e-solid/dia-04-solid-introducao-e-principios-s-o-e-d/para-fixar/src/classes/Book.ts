type Book = {
  book: string;
  author: string;
  genre: string;
}

class BookWishList {
  private wishlist: Book[] = []
  constructor(book?: Book) {
    if(book) this.wishlist.push(book)
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

  removeFromWishlist(book: Book): void {
    this.wishlist = this.wishlist.filter((item) => item.book !== book.book);
  }
}

export default BookWishList;