import INotification from "../interfaces/INotification";

class Notifications {
  constructor(private message: string, private channelsList: INotification[]) { }

  send(): void {
    this.channelsList.forEach(channel => {
      channel.send(this.message);
    });
  }
}

export default Notifications;