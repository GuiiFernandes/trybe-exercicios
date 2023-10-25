import BookWishList from "./classes/Book";
import ReadingTracker from "./classes/ReadingTracker";

const readTracker = new ReadingTracker(20);
const bookWishList = new BookWishList();
bookWishList.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
bookWishList.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);