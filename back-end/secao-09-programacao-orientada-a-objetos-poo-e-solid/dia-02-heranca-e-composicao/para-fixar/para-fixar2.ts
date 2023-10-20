class SuperClass2 {
  constructor(public isSuper: boolean = true) { }
  protected sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass2 extends SuperClass2 {
  sayHello2(): void {
    this.sayHello();
  }
}

const myFunc2 = (obj: Subclass2) => {
  obj.sayHello2();
};

// const sup2 = new SuperClass2();
const sub2 = new Subclass2();

// myFunc2(sup2); <- ERROR: objeto do tipo SuperClass2 não é compatível com o parâmetro de tipo Subclass2
myFunc2(sub2);
