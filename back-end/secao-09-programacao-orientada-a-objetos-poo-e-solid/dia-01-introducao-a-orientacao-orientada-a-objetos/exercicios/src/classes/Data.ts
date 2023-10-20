type FormatDate = 'dd/mm/aaaa' | 'aaaa-mm-dd' | 'dd de M de aa' | 'dd, M de aaaa';

class Data {
  private _day = 1;
  private _month = 1;
  private _year = 1900;
  constructor(day: number, month: number, year: number) {
    if (!this.invalidDate(day, month, year)) {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  get day(): number { return this._day; }
  get month(): number { return this._month; }
  get year(): number { return this._year; }

  private invalidDate(day: number, month: number, year: number): boolean {
    const dateStr = `${year}-${month}-${day}`;
    return new Date(dateStr).getDate() !== day;
  }
  
  setDay(value: number, constructor = false) {
    if (this.invalidDate(value, this.month, this.year)) {
      throw new Error('invalid day');
    }
    if (constructor) return value;
    this._day = value;
  }

  setMonth(value: number, constructor = false) {
    if (this.invalidDate(this.day, value, this.year)) {
      throw new Error('invalid month');
    }
    if (constructor) return value;
    this._month = value;
  }

  setYear(value: number, constructor = false) {
    if (this.invalidDate(this.day, this.month, value)) {
      throw new Error('invalid year');
    }
    if (constructor) return value;
    this._year = value;
  }

  getMonthName(): string {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
      'september', 'october', 'november', 'december'];
    return months[this.month - 1];
  }

  isLeapYear(): boolean {
    return this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0;
  }

  compare(date: Data): number {
    const currentDate = new Date(`${this.year}-${this.month}-${this.day}`);
    const compareDate = new Date(`${date.year}-${date.month}-${date.day}`);
    if (currentDate > compareDate) return 1;
    if (currentDate < compareDate) return -1;
    return 0;
  }

  format(format: FormatDate): string {
    const day = this.day.toString().padStart(2, '0');
    const month = this.month.toString().padStart(2, '0');
    const year = this.year.toString();
    const monthName = this.getMonthName();
    return format.replace('dd', day).replace('mm', month).replace('yyyy', year).replace('aaaa', year).replace('M', monthName).replace('aa', year.slice(2, 4));
  }
}

export default Data;