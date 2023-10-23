
class Person {
  protected mult = 31536000000;
  constructor (private _name: string, private _birthDate: string | Date) {
    this.setName(this._name);
    this.setBirthDate(this._birthDate);
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  setName(value: string) {
    if (value.length < 3) throw new Error('Name must have at least 3 characters.');
    this._name = value;
  }

  setBirthDate(value: string | Date) {
    const valueDate = new Date(value);
    const nowDate = new Date().getTime();
    const age = (nowDate - valueDate.getTime()) / this.mult;
    if (age <= 0) throw new Error('The date cannot be in the future.');
    if (age > 120) throw new Error('The person must be at most 120 years old.');
    this._birthDate = valueDate;
  }
}

export default Person;