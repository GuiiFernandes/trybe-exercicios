import INotification from "../interfaces/INotification";

class Phone implements INotification {
  send(message: string): void {
    console.log(`Phone: ${message}`);
  }
}

export default Phone;