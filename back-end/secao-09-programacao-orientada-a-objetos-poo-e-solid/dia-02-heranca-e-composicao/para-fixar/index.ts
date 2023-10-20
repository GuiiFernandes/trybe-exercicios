// Crie uma classe chamada Superclass.
class SuperClass {
  // A Superclass deve possuir um atributo público isSuper
  // isSuper deve ser setado como true na inicialização.
  constructor(public isSuper: boolean = true) { }
  // A Superclass deve possuir um método público chamado sayHello, que deve imprimir “Olá mundo!”.
  sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends SuperClass { }

const myFunc = (superClass: SuperClass) => {
  superClass.sayHello();
};

const mySuperClass = new SuperClass();
const mySubClass = new Subclass();

myFunc(mySuperClass);
myFunc(mySubClass);
