import Console from "./classes/Console";
import Email from "./classes/Email";
import Notifications from "./classes/Notification";
import Phone from "./classes/Phone";

const notification = new Notifications('Hello world!', [
  new Email(),
  new Console(),
  new Phone(),
]);

notification.send();