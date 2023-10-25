import EmailNotification from "./classes/EmailNotification";
import ReadingTracker from "./classes/ReadingTracker";

const notification = new EmailNotification('guifjj92@gmail.com');
const readingTracker = new ReadingTracker(15, notification);

readingTracker.trackReadings(10);
readingTracker.trackReadings(10);