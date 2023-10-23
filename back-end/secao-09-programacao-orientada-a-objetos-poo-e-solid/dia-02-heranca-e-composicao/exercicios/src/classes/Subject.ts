class Subject {
  private _name = '';

  constructor(name: string) {
    this.setName(name);
  }

  get name(): string { return this.name; }

  setName(name: string) {
    if (!name) throw new Error('Name must have at least 3 characters.');
    this._name = name;
  }
}

export default Subject;