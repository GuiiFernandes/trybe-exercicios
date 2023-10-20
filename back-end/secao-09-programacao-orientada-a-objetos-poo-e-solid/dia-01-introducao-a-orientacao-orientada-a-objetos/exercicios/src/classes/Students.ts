class Student {
  private _registration: string;
  private _name = '';
  private _proofNotes: number[] = [];
  private _workNotes: number[] = [];

  constructor(registration: string, name: string, proofNotes: number[], workNotes: number[]) {
    this._registration = registration;
    this.name = name;
    this._proofNotes = this.setproofNotes(proofNotes, true) || [];
    this._workNotes = workNotes;
  }

  get registration(): string { return this._registration; }
  get name(): string { return this._name; }
  get proofNotes(): number[] { return this._proofNotes; }
  get workNotes(): number[] { return this._workNotes; }

  setproofNotes(value: number[] | number, constructor = false): number[] | void {
    const newProofNotes = value instanceof Array ? [...this.proofNotes, ...value] : [...this.proofNotes, value];
    if (newProofNotes.length > 4) {
      throw new Error(`The number of test scores cannot be greater than 4 and with this addition it will be ${newProofNotes.length}`);
    } else {
      if (constructor) return newProofNotes;
      this._proofNotes = newProofNotes;
    }
  }

  set workNotes(value: number[] | number) {
    const newWorkNotes = value instanceof Array ? [...this.workNotes, ...value] : [...this.workNotes, value];
    if (newWorkNotes.length > 2) {
      throw new Error(`The number of assignment grades cannot exceed 2 and with this addition it will be ${newWorkNotes.length}`);
    } else {
      this._workNotes = newWorkNotes;
    }
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('The name must contain at least 3 characters.');
    }
    this._name = value;
  }

  getSum(): number {
    return [...this.proofNotes, ...this.workNotes].reduce((sum, note) => sum + note, 0);
  }

  getAverage(): number {
    const sum = this.getSum();
    return Number((sum / (this.proofNotes.length + this.workNotes.length)).toFixed(2));
  }
}

export default Student;