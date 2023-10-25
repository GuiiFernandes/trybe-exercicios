import INotificator from '../interfaces/INotificator';

export default class ConsoleNotification implements INotificator {
  constructor(private name: string) { }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}