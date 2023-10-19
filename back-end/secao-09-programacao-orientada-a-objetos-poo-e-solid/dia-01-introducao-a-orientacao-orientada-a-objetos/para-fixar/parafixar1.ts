class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;
  
  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(`Connected to ${this._connectedTo}`);
    } else {
      console.log(`Connection not available: ${value}`);
    }
  }

  turnOn():void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution}, \n\
available connections: ${this._connections}`,);
  }
}

const tv1 = new Tv('Samsung', 50, '4k', ['HDMI', 'USB', 'Bluetooth']);

tv1.turnOn();

tv1.connectedTo = 'HDMI';
tv1.connectedTo = 'ANTENA!';