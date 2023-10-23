import Employee from '../Interfaces/Employee';
import Person from './Person';
import Subject from './Subject';

class Teacher extends Person implements Employee {
  private _salary: number;
  private _registration: string;
  private _admissionDate: Date;
  private _subject: Subject;
  constructor(
    name: string,
    birthDate: string,
    salary: number,
    subject: Subject,
    admissionDate: string | undefined = undefined,
  ) {
    const correctAdmissionDate = admissionDate || new Date().toISOString().split('T')[0];
    super(name, birthDate);
    this._salary = this.validateSalary(salary);
    this._registration = this.generateRegistration();
    this._admissionDate = this.validateAdmissionDate(correctAdmissionDate);
    this._subject = subject;
  };

  get salary(): number { return this._salary; };
  get registration(): string { return this._registration; };
  get admissionDate(): Date { return this._admissionDate; };
  get subject(): Subject { return this._subject; };

  setSalary(value: number) { this._salary = this.validateSalary(value); }
  setAdmissionDate(value: string) { this._admissionDate = this.validateAdmissionDate(value); }
  setSubject(value: Subject) { this._subject = value; }

  validateSalary(value: number) {
    if (value < 0) throw new Error('Salary must be greater than 0.');
    return value;
  }

  validateAdmissionDate(value: string) {
    const date = new Date(value);
    if (date > new Date()) throw new Error('Admission date must be less than current date.');
    return date;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
};

export default Teacher;