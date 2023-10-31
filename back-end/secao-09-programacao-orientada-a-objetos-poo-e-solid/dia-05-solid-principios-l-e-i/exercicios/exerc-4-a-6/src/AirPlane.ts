import { IPlane } from "./interfaces";

export default class AirPlane implements IPlane {
  fly(): void { console.log('Fly a airplane'); }
}