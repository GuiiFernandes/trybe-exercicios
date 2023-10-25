import notification from "../utils/notification";

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number = 0;
  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    this.booksRead >= this.readingGoal
      ? notification(
        'Congratulations! You\'ve reached your reading goal!',
      )
      : notification(
        'There are still some books to go!',
      );
  }
}

export default ReadingTracker;