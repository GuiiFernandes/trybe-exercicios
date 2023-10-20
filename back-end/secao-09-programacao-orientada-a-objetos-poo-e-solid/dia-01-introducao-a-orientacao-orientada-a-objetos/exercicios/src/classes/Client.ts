class Client {
  private _name = '';
  constructor (name: string) {
    this.name = name;
  }

  get getName() { return this._name; }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('The name must contain at least 3 characters.');
    }
    this._name = value;
  }
}

export default Client;