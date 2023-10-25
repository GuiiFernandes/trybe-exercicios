import INotificator from '../interfaces/INotificator';

export default class PhoneNotification implements INotificator {
  private phone: number;

  constructor(phone: number) {
    this.phone = phone;
  }

  sendNotification(message: string): void {
    console.log(
      `Here should go the implementation \
      to send notification to the phone ${this.phone} - ${message}`,
    );
  }
}