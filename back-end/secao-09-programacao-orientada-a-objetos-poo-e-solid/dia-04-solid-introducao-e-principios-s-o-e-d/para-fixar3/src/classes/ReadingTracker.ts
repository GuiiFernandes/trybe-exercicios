import INotificator from '../interfaces/INotificator';
import ConsoleNotification from './ConsoleNotification';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: INotificator;
  constructor(readingGoal: number, notificator: INotificator = new ConsoleNotification('console')) {
    this.notificator = notificator;
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
}