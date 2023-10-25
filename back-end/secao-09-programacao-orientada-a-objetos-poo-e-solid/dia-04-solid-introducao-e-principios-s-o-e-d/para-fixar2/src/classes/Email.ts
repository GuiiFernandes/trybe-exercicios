import INotification from "../interfaces/INotification";

class Email implements INotification {
  send(message: string): void {
    console.log(`Email: ${message}`);
  }
}

export default Email;