import INotification from "../interfaces/INotification";

class Console implements INotification {
  send(message: string): void {
    console.log(`Console: ${message}`);
  }
}

export default Console;