import INotificator from '../interfaces/INotificator';

export default class EmailNotification implements INotificator {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  sendNotification(message: string): void {
    console.log(
      `Here should go the implementation
      to send notification to the email: ${this.email} - ${message} \n`,
    );
  }
}