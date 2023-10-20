class SuperClass {
  constructor(public isSuper: boolean = true) { }
  sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (obj: SuperClass): void => {
  obj.sayHello();
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
};

const sup = new SuperClass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);
