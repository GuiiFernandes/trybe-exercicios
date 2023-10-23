import Person from './Person';

class Student extends Person {
  private _registration: string;
  private _proofNotes: number[] = [];
  private _workNotes: number[] = [];
  constructor(
    name: string,
    birthDate: string,
    proofNotes = [],
    workNotes = [],
  ) {
    super(name, birthDate);
    this._registration = this.generateRegistration();
    this._proofNotes = this.setproofNotes(proofNotes, true) || [];
    this._workNotes = this.setWorkNotes(workNotes, true) || [];;
  }

  get registration(): string { return this._registration; }
  get proofNotes(): number[] { return this._proofNotes; }
  get workNotes(): number[] { return this._workNotes; }

  setproofNotes(value: number[] | number, withReturn = false): number[] | void {
    const newProofNotes = value instanceof Array ? [...this.proofNotes, ...value] : [...this.proofNotes, value];
    if (newProofNotes.length > 4) {
      throw new Error(`The number of test scores cannot be greater than 4 and with this addition it will be ${newProofNotes.length}`);
    } else {
      if (withReturn) return newProofNotes;
      this._proofNotes = newProofNotes;
    }
  }

  setWorkNotes(value: number[] | number, withReturn = false) {
    const newWorkNotes = value instanceof Array ? [...this.workNotes, ...value] : [...this.workNotes, value];
    if (newWorkNotes.length > 2) {
      throw new Error(`The number of assignment grades cannot exceed 2 and with this addition it will be ${newWorkNotes.length}`);
    } else {
      if (withReturn) return newWorkNotes;
      this._workNotes = newWorkNotes;
    }
  }

  getSum(): number {
    return [...this.proofNotes, ...this.workNotes].reduce((sum, note) => sum + note, 0);
  }

  getAverage(): number {
    const sum = this.getSum();
    return Number((sum / (this.proofNotes.length + this.workNotes.length)).toFixed(2));
  }

  private generateRegistration() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}

export default Student;